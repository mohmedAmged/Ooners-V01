import { create } from "zustand";
import { baseURL } from "../functions/baseUrl";


const useCitizenshipStore = create((set) => ({
    citizenships: [],
    fetchCitizenships: async () => {
      try {
        const response = await fetch(`${baseURL}/citizenships`);
        const data = await response.json();
        set({ citizenships: data.data.citizenhips});
      } catch (error) {
        console.error("Error fetching citizenships:", error);
      }
    },
  }));
export default useCitizenshipStore;


