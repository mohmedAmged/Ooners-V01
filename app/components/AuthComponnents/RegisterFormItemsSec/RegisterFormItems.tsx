"use client"
import PhoneInput from '../PhoneInputSec/PhoneInput'
import styles from './registerFormItems.module.css'
import useCitizenshipStore from '../../../store/AllCitizenships'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from "js-cookie";
import axios from 'axios';
import { baseURL } from '@/app/functions/baseUrl';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';

export default function RegisterFormItems() {
    const { citizenships, fetchCitizenships } = useCitizenshipStore();
    // const [selectedCitizenship, setSelectedCitizenship] = useState("");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_code: "",
        phone: "",
        citizenship_id: "",
        password: "",
        password_confirmation: "",
        accept_terms: "yes",
    });

        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
        const router = useRouter();
        useEffect(() => {
            fetchCitizenships();
        }, [ fetchCitizenships]);

        const handleChange = (
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            const { id, value } = event.target;
            setFormData((prev) => ({ ...prev, [id]: value }));
        };

        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setLoading(true);
            setError("");
            try {
                const response = await axios.post(`${baseURL}/register`, formData, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json', 
                        },
                });
                const  token  = response.data.data.token;
                const userData = response?.data?.data?.user;
        
                if (token) {
                    Cookies.set("auth_token", token, { expires: 7 }); 
                    Cookies.set("currentLoginedData", JSON.stringify(userData), { expires: 7 });  
                    }
                    toast.success("Registration successful!");

                    console.log(userData);
                    router.push("/");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (err: any) {
                    if (err.response?.data?.errors) {
                        const errorMessages = Object.values(err.response.data.errors)
                            .flat()
                            .join(", ");
                        toast.error(errorMessages);
                    } else if (err.response?.data?.message) {
                        toast.error(err.response.data.message);
                    } else {
                        toast.error("An unexpected error occurred");
                    }
                } finally {
                setLoading(false);

                }
        };
  return (
    <div className={styles.registerFormItems__handler}>
        <h1 className="text-3xl font-bold mb-6">Join Ooners</h1>
        <form className="space-y-4 w-full max-w-sm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first_name" className="block text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    id="first_name"
                    value={formData?.first_name}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="last_name" className="block text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    id="last_name"
                    value={formData?.last_name}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData?.email}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                </label>
                <PhoneInput 
                    onPhoneChange={(phoneCode, phoneNumber) => {
                        setFormData((prev) => ({
                        ...prev,
                        phone_code: phoneCode,
                        phone: phoneNumber,
                        }));
                    }}
                />
            </div>
            <div className="">
                <label  htmlFor="citizenship_id" className="block mb-2 text-sm font-medium text-gray-700">
                Select Citizenship
                </label>
                <select
                id="citizenship_id"
                value={formData?.citizenship_id}
                onChange={handleChange}
                // onChange={handleCitizenshipChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                <option value="" disabled>
                    Choose a citizenship
                </option>
                {citizenships?.map((citizenship: { id: number; name: string }) => (
                    <option key={citizenship.id} value={citizenship.id}>
                    {citizenship.name}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={formData?.password}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="password_confirmation" className="block text-gray-700">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={formData?.password_confirmation}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div className="flex items-center my-4">
                <input
                    id="accept_terms" 
                    type="checkbox"
                    checked={formData.accept_terms === "yes"}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        accept_terms: prev.accept_terms === "yes" ? "no" : "yes",
                      }))
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label 
                    htmlFor="accept_terms" 
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Accept Terms and Conditions
                </label>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
            >
            {loading ? "Submitting..." : "Sign Up"}
            </button>
        </form>
        <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-purple-700 hover:underline">
            Log in.
            </Link>
        </p>
        <ToastContainer />
    </div>
  )
}
