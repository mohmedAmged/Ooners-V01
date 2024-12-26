"use client"
import React, { useState } from 'react'
import styles from './singlePropertyPay.module.css'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
interface PayDetailsItem {
    payName: string;
    payValue: string;

}
interface propertyDetailsProps {
    propertyName: number;
    net_yearly_income: string;
    availableShares: number;
}
// SinglePropertyPayDetails
const SinglePropertyPayDetails: React.FC<propertyDetailsProps> = ({ 
    propertyName, 
    net_yearly_income,
    availableShares
}) =>   {
    const router = useRouter();

    const handleInvestClick = () => {
      Cookies.set('propertyNameStore', `${propertyName}`); 
      router.push('/dashboard/invest'); 
    };

    const [shares, setShares] = useState(250);
    
    const handleIncrease = () => {
    if (shares < availableShares) {
        setShares(shares + 250);
    }
    };

    const handleDecrease = () => {
    if (shares > 250) {
        setShares(shares - 250);
    }
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShares(Number(e.target.value));
    };
    const expectedYearlyAmountNum = (shares * Number(net_yearly_income)) / 100
    const payDetailsItems : PayDetailsItem[] = [
        {
            payName: '5 Year total return',
            payValue: '47.8%'
        },
        {
            payName: 'Yearly investment return',
            payValue: `${net_yearly_income}%`
        },
        {
            payName: 'Expected Yearly amount',
            payValue: `${expectedYearlyAmountNum}`
        },
    ]
  return (
    <div className={`${styles.singlePropertyPayDetails_handler}`}> 
        <div className="w-full ">
        <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
            Investment Overview <span className={`ml-1 text-gray-500 ${styles.iconHref}`}>ℹ️</span>
            </label>
            <span className="text-sm font-medium text-gray-500">
            Max €{availableShares}
            </span>
        </div>

        <div className={`flex items-center ${styles.numOFShare_actions}`}>
            {/* Slider */}
            <div className={`${styles.sliderRange_handler}`}>
                <input
                placeholder='..'
                type="range"
                min="€250"
                max={availableShares}
                value={shares}
                onChange={handleSliderChange}
                className="h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
                />

                {/* Value below the slider */}
                <p className="text-blue-600 font-semibold text-lg">€{shares}</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
            <button
            type='button'
                onClick={handleDecrease}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
                −
            </button>
            <button
            type='button'
                onClick={handleIncrease}
                className="w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
            >
                +
            </button>
            </div>
        </div>
        </div>
        <div className={`${styles.payAmount}`}>
            <p>
            Pay Amount
            </p>
            <h2>
            €{shares}
            </h2>
        </div>
        <div className={`${styles.allPayDetails}`}>
           {
            payDetailsItems?.map((item, idx)=>(
                <div key={idx} className={`${styles.singlePayDetail}`}>
                    <p>
                    {item.payName}
                    </p>
                    <h2>
                    {item.payValue}
                    </h2>
                </div>    
            ))
           }
        </div>
        <div className={`${styles.invest_handler}`}>
            <Link href='' className={`${styles.investLink}`}>
                Check full Investment Scheme
            </Link>
            <ul className={`${styles.investPoints}`}>
                <li>
                If the property exits, you won’t pay the rest of the installments.
                </li>
                <li>
                These amounts are inclusive of Nawy fees.
                </li>
            </ul>
            <button type='button' onClick={handleInvestClick}>
            Invest now
            </button>
            <p>
            You won’t be charged yet. <br/>
            First time users might get instant priority access.
            </p>
        </div>
    </div>
  )
}
export default SinglePropertyPayDetails;

