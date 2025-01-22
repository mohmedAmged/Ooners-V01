import { create } from "zustand";
import Cookies from "js-cookie";
import { baseURL } from "../functions/baseUrl";
import { toast } from "react-toastify";

const useShowCartStore = create((set) => ({
    cart: null,
    fetchCart: async () => {
        const token = Cookies.get('auth_token'); // Get token from cookies

        if (!token) {
            toast.error("Authentication token is missing.");
            return;
        }

        try {
            const response = await fetch(`${baseURL}/show-cart?t=${new Date().getTime()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to fetch cart.");
            }

            const data = await response.json();
            set({ cart: data.data.cart }); 
            // toast.success("Cart fetched successfully!");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            toast.error(`Error fetching cart: ${errorMessage}`);
        }
    },
}));

export default useShowCartStore;
