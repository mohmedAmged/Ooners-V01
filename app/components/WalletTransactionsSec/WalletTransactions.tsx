import React from 'react'
import styles from './walletTransactions.module.css'
import Link from 'next/link'
import currencyIcon from '../../imgs/wallet/iconDollar.png'
import Image from 'next/image'
export default function WalletTransactions() {
    const transactionsFilterItems = [
        {
            item: 'Type',
        },
        {
            item: 'Status',
        },
        {
            item: 'Date',
        },
        {
            item: 'Wallet',
        },
        {
            item: 'Amount',
        },
    ]
  return (
    <section>
      <div className='walletTransactions__handler container py-16 lg:max-w-6xl px-6 m-auto'>
        <h2 className={`${styles.transactionsHeading}`}>
            Transactions
        </h2>
        <div className={`${styles.walletTransactionsCard}`}>
            <div className={`${styles.cardFilters}`}>
                <ul className="flex flex-wrap items-center justify-start text-gray-900 dark:text-dark">
                    {
                        transactionsFilterItems?.map((el,idx)=>(
                            <li className={`${styles.cardFilterItem}`} key={idx}>
                                <Link href="" className="me-4 hover:underline md:me-6 ">{el?.item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={`${styles.cardInfo}`}>
                <Image className={`${styles.currenImage}`} src={currencyIcon} width={55} height={55} alt='currency_icon' />
                <p>
                    No transactions yet
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}
