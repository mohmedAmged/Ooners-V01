"use client"
import React, { useState } from 'react'
import styles from './paymentMethodsTypes.module.css'
export default function PaymentMethodsTypes() {
    const [selectedMethod, setSelectedMethod] = useState('creditCard');

    const handleMethodChange = (method: string) => {
      setSelectedMethod(method);
    };
  return (
    <div className={`${styles.paymentMethodsTypes__handler}`}>
      {/* Payment Method Radio Buttons */}
        <div className={`${styles.paymentMethods_Inputs}`}>
            <div className={`${styles.paymentMethods_InputItem}`}>
                <input
                type="radio"
                id="creditCard"
                value="creditCard"
                checked={selectedMethod === 'creditCard'}
                onChange={() => handleMethodChange('creditCard')}
                />
                <label htmlFor="creditCard">Credit/Debit Card</label>
            </div>
            <div className={`${styles.paymentMethods_InputItem}`}>
            <input
                type="radio"
                id="wallet"
                value="wallet"
                checked={selectedMethod === 'wallet'}
                onChange={() => handleMethodChange('wallet')}
                />
                <label htmlFor="wallet">Wallet</label>
            </div>
            <div className={`${styles.paymentMethods_InputItem}`}>
                <input
                type="radio"
                id="wireTransfer"
                value="wireTransfer"
                checked={selectedMethod === 'wireTransfer'}
                onChange={() => handleMethodChange('wireTransfer')}
                />
                <label htmlFor="wireTransfer">Wire Transfer</label>
            </div>
        </div>
    </div>
  )
}
