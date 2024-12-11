import React from 'react'
import styles from './walletPaymentInfo.module.css'
import creditIcon from '../../imgs/wallet/f7_creditcard-fill.png'
import bankIcon from '../../imgs/wallet/mdi_bank.png'
import Image from 'next/image'

interface PaymentCardItem {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: any; 
    infoText: string;
    btnName: string;
  }
export default function WalletPaymentInfo() {
    const paymentCardItems : PaymentCardItem[] = [
        {
            title: 'Cards',
            img: creditIcon,
            infoText: 'Add a card to enjoy instant deposits from anywhere in the world',
            btnName: '+ Add a new card'
        },
        {
            title: 'Banks',
            img: bankIcon,
            infoText: 'Add a bank account to deposit from anywhere in the world',
            btnName: '+ Add a new bank'
        }
    ]
  return (
    <section>
        <div className='walletPaymentInfo__handler container py-16 lg:max-w-6xl px-6 m-auto'>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ${styles.walletPaymentInfo__cards}`}>
                {
                    paymentCardItems.map((item, index) => (
                        <div key={index} className={`${styles.paymentInfo__card}`}>
                            <h2>
                                {item.title}
                            </h2>
                            <div className={`${styles.cardInfo}`}>
                                <Image className={styles.cardIcon} src={item.img} alt={item.title} width={37} height={37} />
                                <p>
                                    {item.infoText}
                                </p>
                            </div>
                            <div className={`${styles.cardActions}`}>
                                <button type='button'>
                                    {item.btnName}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
