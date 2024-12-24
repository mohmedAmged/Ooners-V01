"use client"
import PhoneInput from '../PhoneInputSec/PhoneInput'
import styles from './registerFormItems.module.css'
import useCitizenshipStore from '../../../store/AllCitizenships'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RegisterFormItems() {
    const { citizenships, fetchCitizenships } = useCitizenshipStore();
    const [selectedCitizenship, setSelectedCitizenship] = useState("");

    useEffect(() => {
        fetchCitizenships();
      }, [ fetchCitizenships]);

      const handleCitizenshipChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCitizenship(event.target.value);
      };
      console.log(citizenships);
      
  return (
    <div className={styles.registerFormItems__handler}>
        <h1 className="text-3xl font-bold mb-6">Join Ooners</h1>
        <form className="space-y-4 w-full max-w-sm">
            <div>
                <label htmlFor="name" className="block text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="name" className="block text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    id="name"
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
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone Number
                </label>
                <PhoneInput />
            </div>
            <div className="">
                <label htmlFor="citizenship" className="block mb-2 text-sm font-medium text-gray-700">
                Select Citizenship
                </label>
                <select
                id="citizenship"
                value={selectedCitizenship}
                onChange={handleCitizenshipChange}
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                <option value="" disabled>
                    Choose a citizenship
                </option>
                {citizenships?.map((citizenship: { id: number; name: string }) => (
                    <option key={citizenship.id} value={citizenship.name}>
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
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            <div className="flex items-center my-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms and Conditions</label>
            </div>
            <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
            >
            Sign Up
            </button>
        </form>
        <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-purple-700 hover:underline">
            Log in.
            </Link>
        </p>
    </div>
  )
}
