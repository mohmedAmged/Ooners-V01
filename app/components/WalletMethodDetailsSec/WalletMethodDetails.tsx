import React from 'react'
import styles from './walletMethodDetails.module.css'
export default function WalletMethodDetails({ walletBalance }: { walletBalance: string }) {
  return (
    <div className={styles.walletMethodDetails__handler}>
        <div className={styles.overlay}></div>
        <div className={styles.walletInfo}>
            <p>
            Available Balance
            </p>
            <h2>
            {walletBalance}
            </h2>
        </div>
    </div>
  )
}
