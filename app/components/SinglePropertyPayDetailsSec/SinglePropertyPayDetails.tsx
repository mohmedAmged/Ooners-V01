"use client"
import React from 'react'
import styles from './singlePropertyPay.module.css'
import Link from 'next/link'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
interface PayDetailsItem {
    payName: string;
    payValue: string;
}
export default  function SinglePropertyPayDetails({propertyName } : {propertyName: string}) {
    const router = useRouter();

    const handleInvestClick = () => {
      Cookies.set('propertyNameStore', propertyName); // Assuming you have cookiesData defined
      router.push('/dashboard/invest'); 
    };
    const payDetailsItems : PayDetailsItem[] = [
        {
            payName: '5 Year total return',
            payValue: '9.6%'
        },
        {
            payName: 'Yearly investment return',
            payValue: '604'
        },
    ]
  return (
    <div className={`${styles.singlePropertyPayDetails_handler}`}> 
        <div className={`${styles.payAmount}`}>
            <p>
            Pay Amount
            </p>
            <h2>
            € 250
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
