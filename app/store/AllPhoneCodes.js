import { create } from "zustand";
import { baseURL } from "../functions/baseUrl";

// Create the Zustand store
const usePhoneCodeStore = create((set) => ({
  phoneCodes: [], // State for the list of phone codes
  fetchPhoneCodes: async () => {
    try {
      const response = await fetch(`${baseURL}/phone-codes`); 
      const data = await response.json();
      set({ phoneCodes: data.data.phone_codes }); 
    } catch (error) {
      console.error("Error fetching phone codes:", error);
    }
  },
}));

export default usePhoneCodeStore;
