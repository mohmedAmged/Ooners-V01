import React from 'react'
import PaymentMethodsTypes from '../PaymentMethodsTypesSec/PaymentMethodsTypes'

export default function ChoosePaymentDetails() {
  return (
    <section>
        <div className='singlePropertyAllDetails__handler container py-16 lg:max-w-6xl px-6 m-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Column */}
                <div className="col-span-12 lg:col-span-5">
                    <h2>
                        Paymet
                    </h2>
                    <p>
                    Select a payment method
                    </p>
                    <PaymentMethodsTypes />
                </div>

                {/* Right Column */}
                <div className="col-span-12 lg:col-span-7 p-4 py-10 border border-gray-200 rounded-lg shadow-md bg-white">
                
                </div>
            </div>
        </div>
    </section>
  )
}
