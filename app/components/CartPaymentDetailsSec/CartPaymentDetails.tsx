import React from 'react'
import styles from './cartPaymentDetails.module.css'
import Image from 'next/image'
import build from '../../imgs/payment/build.png'
import deleteIcon from '../../imgs/payment/mynaui_trash.png'
export default function CartPaymentDetails({ propertyName }: { propertyName: string }) {
  return (
    <div className={`${styles.cartPayment__handler}`}>
      <div className={styles.cartCardItem}>
            <div className={styles.cartCardAction}>
                <Image src={deleteIcon} alt='delete'/>
            </div>
            <div className={styles.cartCardMainInfo}>
                <Image src={build} alt='build'/>
                <div className={styles.cartCardDetails}>
                    <h2>
                        {propertyName}
                    </h2>
                    <p>
                    Talaat Moustafa Group (TMG) Holding - North Coast ...
                    </p>
                </div>
            </div>
      </div>
      <div className={styles.cartCardMainAction}>
        <div className={styles.totalPay}>
            <p>
                Amount
            </p>
            <p>
                €250
            </p>
        </div>
        <button type='button'>
            Pay Now
        </button>
      </div>
    </div>
  )
}
