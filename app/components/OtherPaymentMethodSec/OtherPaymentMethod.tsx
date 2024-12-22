import React from 'react'
import styles from './otherPaymentMethod.module.css'
import method1 from '../../imgs/payment/Payment-method-button-40px (1).png'
import method2 from '../../imgs/payment/Payment-method-button-40px (2).png'
import method3 from '../../imgs/payment/Payment-method-button-40px.png'
import Image from 'next/image'
export default function OtherPaymentMethod() {
  return (
    <div className={`${styles.otherPaymentMethod__handler}`}>
      <p>
      Other payment methods
      </p>
      <ul className={styles.methodsItems}>
        <li className={styles.methodsItem}>
            <Image src={method1} alt='method1' />
        </li>
        <li>
            <Image src={method2} alt='method2' />
        </li>
        <li>
            <Image src={method3} alt='method3' />
        </li>
      </ul>
    </div>
  )
}
