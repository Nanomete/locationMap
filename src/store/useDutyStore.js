import axios from "axios";
import { create } from "zustand";
import { api } from "../lib/API";

const dutyStore = (set) => ({
    personnel:[],
    locations:[],
    assigments:[],
    selectedLocationId:null,

    fetchAll: async () => {
        try {
            const personnel = await api.get('/personnel');
            set({ 
                // set can assign key in global state
                personnel:personnel,
            })
        } catch (error) {
            console.log(error);
        }
    }
})

const useDutyStore = create(dutyStore);

export default useDutyStore;