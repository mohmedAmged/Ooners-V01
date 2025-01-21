"use client"

import { useEffect, useState } from "react";
import usePhoneCodeStore from '../../../store/AllPhoneCodes'
import Image from "next/image";
type PhoneInputProps = {
  onPhoneChange: (phoneCode: string, phoneNumber: string) => void;
}
export default function PhoneInput({ onPhoneChange }: PhoneInputProps) {
    const { phoneCodes, fetchPhoneCodes } = usePhoneCodeStore();
    const [selectedCountry, setSelectedCountry] = useState({
      code: "93",
      flag: null,
    });
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    useEffect(() => {
      fetchPhoneCodes();
    }, [fetchPhoneCodes]);
  
    const handleCountrySelect = (country: { phone_code: string; flag: null }) => {
      setSelectedCountry({ code: country.phone_code, flag: country.flag ?? null });
      setDropdownOpen(false);
      onPhoneChange(country.phone_code, phoneNumber);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPhoneNumber(value);
      onPhoneChange(selectedCountry.code, value);
    };
    
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative flex">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-100"
        >
          {selectedCountry.flag ? (
            <Image
              src={selectedCountry.flag}
              alt="flag"
              className="h-4 w-6 mr-2"
            />
          ) : (
            <span className="h-4 w-6 mr-2 bg-gray-300 rounded"></span>
          )}
          +{selectedCountry.code}
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-full max-h-60 overflow-y-auto">
            <ul className="py-2 text-sm text-gray-700">
              {phoneCodes.map((country: { phone_code: string; flag: null }, index: number) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                  >
                    {country.flag ? (
                      <Image
                        src={country.flag}
                        alt="flag"
                        className="h-4 w-6 mr-2"
                      />
                    ) : (
                      <span className="h-4 w-6 mr-2 bg-gray-300 rounded"></span>
                    )}
                    +{country.phone_code}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <input
          type="text"
          placeholder="123-456-7890"
          className="py-2.5 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-lg w-full focus:ring-blue-500 focus:border-blue-500"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  )
}
