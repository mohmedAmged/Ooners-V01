"use client"
import React, { useState } from 'react'
import styles from './paymentMethodsTypes.module.css'
import CreditCardMethod from '../CreditCardMedthodSec/CreditCardMethod';
import card1 from '../../imgs/payment/Card 1.png'
import card2 from '../../imgs/payment/Frame 11.png'
import WalletMethodDetails from '../WalletMethodDetailsSec/WalletMethodDetails';
export default function PaymentMethodsTypes() {
    const [selectedMethod, setSelectedMethod] = useState('creditCard');

    const handleMethodChange = (method: string) => {
      setSelectedMethod(method);
    };
    const savedCardItems = [
      {
        cardImg: card1
      },
      {
        cardImg: card2
      }
    ]
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
                {selectedMethod === 'creditCard' && (
                  <CreditCardMethod savedCards={savedCardItems}/> // Pass saved cards data here
                )}
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
                {selectedMethod === 'wallet' && <WalletMethodDetails walletBalance={`€500`} />}
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
