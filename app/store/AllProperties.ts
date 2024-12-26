// import { create } from "zustand";
// import { baseURL } from "../functions/baseUrl";


// const usePropertiesStore = create((set) => ({
//     properties: [],
//     fetchProperties: async () => {
//       try {
//         const response = await fetch(`${baseURL}/all-properties`);
//         const data = await response.json();
//         set({ properties: data.data.properties});
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     },
//   }));
// export default usePropertiesStore;

import { create } from "zustand";
import { baseURL } from "../functions/baseUrl"; 
interface Property {
  id: number;
  title: string;
  code: string;
  short_description: string;
  description: string;
  country: string;
  city: string;
  main_image: string;
  listing_type: string;
  bedrooms_count: number;
  bathrooms_count: number;
  area: string;
  total_value: string;
  min_investment_amount: string;
  purchase_price: string;
  expected_yearly_rent: string;
  net_yearly_income: string;
  projected_net_yield: string;
  number_of_investors: number;
  number_of_shares: number;
  price_per_share: number;
  available_amount: string;
  funded_amount: string;
  funded_percentage: string;
  investment_status: string;
  created_at: string;
}

interface PropertiesState {
  properties: Property[];
  fetchProperties: () => Promise<void>;
}

const usePropertiesStore = create<PropertiesState>((set) => ({
  properties: [],
  fetchProperties: async () => {
    try {
      const response = await fetch(`${baseURL}/all-properties`);
      const data = await response.json();

      if (data.data && data.data.properties) {
        // Ensure type safety and data availability
        set({ properties: data.data.properties as Property[] });
      } else {
        console.error("Invalid property data format in response");
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  },
}));

export default usePropertiesStore;