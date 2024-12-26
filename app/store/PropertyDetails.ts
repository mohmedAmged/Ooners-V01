import { create } from "zustand";
import { baseURL } from "../functions/baseUrl";
import PropertyDetails from "../interfaces/propertyDetailsTypes";

// interface PropertyDetails {
//   id: number;
//   title: string;
//   code: string;
//   description: string;
//   short_description: string;
//   country: string;
//   city: string;
//   main_image: string;
//   listing_type: string;
//   bedrooms_count: number;
//   bathrooms_count: number;
//   area: string;
//   total_value: string;
//   min_investment_amount: string;
//   purchase_price: string;
//   expected_yearly_rent: string;
//   net_yearly_income: string;
//   projected_net_yield: string;
//   number_of_investors: string;
//   number_of_shares: number;
//   price_per_share: string;
//   created_at: string;
//   available_amount: string;
//   funded_amount: string;
//   funded_percentage: string;
//   investment_status: string;
//   attachments: { id: number; file: string; type: string; file_name: string }[];
//   images: { id: number; file: string; type: string; file_name: string }[];
//   facilities: { id: number; name: string; icon: string }[];
// }

interface PropertyStoreState {
  propertyDetails: PropertyDetails | null;
  error: string | null;
  loading: boolean;
  fetchProperty: (propertyId: number) => Promise<void>;
}

const usePropertyStore = create<PropertyStoreState>((set) => ({
  propertyDetails: null,
  error: null,
  loading: false,
  fetchProperty: async (propertyId: number) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${baseURL}/show-property/${propertyId}`);
      const data = await response.json(); 
      if (data.data.property) {
        set({ propertyDetails: data.data.property, loading: false });
      } else {
        set({ error: "Property not found", loading: false });
      }
    } catch (error) {
      console.error("Error fetching property details:", error);
      set({ error: "An error occurred", loading: false });
    }
  },
}));

export default usePropertyStore;