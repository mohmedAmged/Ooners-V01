"use client"
import Link from 'next/link'
import styles from './loginFormItems.module.css'
import { useState } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';
import { baseURL } from '@/app/functions/baseUrl';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function LoginFormItems() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
        const router = useRouter();

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
                const response = await axios.post(`${baseURL}/login`, formData, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                });
                const  token  = response?.data?.data?.token;
                const userData = response?.data?.data?.user;
        
                if (token) {
                    Cookies.set("auth_token", token, { expires: 7 }); 
                    Cookies.set("currentLoginedData", JSON.stringify(userData), { expires: 7 });  
                    }
                    toast.success("login successful!");
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
    <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
    <form className="space-y-4 w-full max-w-sm" onSubmit={handleSubmit}>
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
        {error && <p className="text-red-500">{error}</p>}
        <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
        >
            {loading ? "Loging..." : "Log In"}
        </button>
    </form>
    <p className="mt-4 text-gray-600">
            Don’t have an account?.{" "}
        <Link href="/auth/register" className="text-purple-700 hover:underline">
            Sign Up.
        </Link>
    </p>
    <ToastContainer />
</div>
  )
}
