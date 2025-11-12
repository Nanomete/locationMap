import { create } from "zustand";

const dutyStore = () => ({
    personal:[],
    locations:[],
    assigments:[],
    selectedLocationId:null,
})

const useDutyStore = create(dutyStore);

export default useDutyStore;