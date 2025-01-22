import React from 'react'
import PaymentMethodsTypes from '../PaymentMethodsTypesSec/PaymentMethodsTypes'
import styles from './choosePaymentDetails.module.css'
import OtherPaymentMethod from '../OtherPaymentMethodSec/OtherPaymentMethod'
import CartPaymentDetails from '../CartPaymentDetailsSec/CartPaymentDetails'
export default function ChoosePaymentDetails() {
  return (
    <section>
        <div className='singlePropertyAllDetails__handler container py-16 lg:max-w-6xl px-6 m-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
              {/* Left Column */}
                <div className={`col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6`}>
                    <h2 className={styles.rightSideHead}>
                        Paymet
                    </h2>
                    <p className={styles.rightSideInfo}>
                    Select a payment method
                    </p>
                    <PaymentMethodsTypes />
                    <OtherPaymentMethod />
                </div>

                {/* Right Column */}
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 p-4 py-10">
                  <CartPaymentDetails />
                </div>
            </div>
        </div>
    </section>
  )
}
