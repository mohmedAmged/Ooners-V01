import React from 'react'
import styles from './walletTotalBalance.module.css'
export default function WalletTotalBalance() {
  return (
    <section>
        <div className='walletTotalBalance__handler container py-16 lg:max-w-6xl px-6 m-auto'>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ${styles.walletTotalBalance__card}`}>
            <div className={styles.walletTotalBalanceInfo}>
                <p>
                Total Balance
                </p>
                <h2>
                9,475.00 <span className={styles.currency}>€</span>
                </h2>
            </div>
            <div className={` ${styles.walletActionsHandler}`}>
                <div className={` ${styles.walletActions}`}>
                    <button type="button" className={styles.btnDeposit}>
                        Deposit
                    </button>
                    <button className={styles.btnWithdraw} type="button">
                        Withdraw
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    </section>
  )
}
