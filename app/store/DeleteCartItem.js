import { create } from "zustand";
import Cookies from "js-cookie";
import { baseURL } from "../functions/baseUrl";
import { toast } from "react-toastify";



const useDeleteCartItem = create(() => ({
    deleteCartItem: async (itemId) => {
        const token = Cookies.get("auth_token");

        if (!token) {
            toast.error("Authentication token is missing.");
            return;
        }

        try {
            const response = await fetch(`${baseURL}/delete-cart-item/${itemId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to delete cart item.");
            }

            toast.success("Item deleted from cart successfully!");
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An unknown error occurred.";
            toast.error(`Error deleting cart item: ${errorMessage}`);
        }
    },
}));

export default useDeleteCartItem;
