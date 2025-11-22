import axios from "axios";
import { create } from "zustand";
import { api } from "../lib/API";

const dutyStore = (set, get) => ({
  personnel: [],
  locations: [],
  assigments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try {
      // const personnel = await api.get("/personnel");
      // const locations = await api.get("/locations");
      // const assigments = await api.get("/locationPersonnel")
      
      // ใช้เป็น array ในการเข้าถึงแทน และเวลา await ก็จะรอทีเดียวเลยไม่ต้องรอทีละบรรทัด
      const [personnel, locations, assigments] = await Promise.all([
        api.get("/personnel"),
        api.get("/locations"),
        api.get("/locationPersonnel"),
      ])
      set({
        // set can assign key in global state
        personnel: personnel,
        locations: locations,
        assigments: assigments
      });
    } catch (error) {
      console.log(error);
    }
  },

  addLocation: async (lat, lng, name) => {
    try {
      await api.post("/locations", {
        name: name,
        lat: Number(lat),
        lng: Number(lng),
        maxCapacity: 5,
      });
      await get().fetchAll()
    } catch (error) {
      console.log(error);
    }
  },

  assignPerson: async (personId, locationId) => {
    // fn body
    try {
      console.log(personId, locationId)
      const res = await api.post('/locationPersonnel', {
        personId:personId,
        locationId:locationId,
      })
    } catch (error) {
      console.log(error)
    }
  }
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
