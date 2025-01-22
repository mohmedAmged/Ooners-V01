import { toast } from "react-toastify";
import { create } from "zustand";
import { baseURL } from "../functions/baseUrl";
import Cookies from "js-cookie";

const useCartStore = create(() => ({
    addToCart: async (propertyID: number, investmentAmount: number) => {
        const token = Cookies.get('auth_token');
        
        toast.loading("Adding to cart...");
        if (!token) {
            toast.error("Authentication token is missing.");
            return;
        }
        try {
            const response = await fetch(`${baseURL}/control-cart-items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    property_id: propertyID,
                    investment_amount: investmentAmount,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add item to cart.");
            }

            const result = await response.json();
            toast.dismiss(); // Dismiss the loading toast
            toast.success("Item added to cart successfully!");
            return result;
        } catch (error) {
            toast.dismiss(); // Dismiss the loading toast
            toast.error("Failed to add item to cart. Please try again.");
            throw error;
        }
    },
}));

export default useCartStore;