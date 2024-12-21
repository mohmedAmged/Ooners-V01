import React from 'react'
import styles from './singlePropertyInvest.module.css'

interface InvestBodyItem {
    investName: string;
    investValue: string;
}
export default function SinglePropertyInvestDetails() {
    const investDetailsBodyItems : InvestBodyItem[] = [
        {
            investName: 'Unit Price',
            investValue: 'EGP 54,103,808'
        },
        {
            investName: 'Maintenance',
            investValue: 'EGP 2,497,455'
        }
    ]
  return (
    <div className={`${styles.singlePropInvest__handler}`}>
        <h2>
            Investment details
        </h2>
        <div className={`${styles.investDetailsInfo}`}>
            <div className={`${styles.investDetailsHead}`}>
                <p>
                Property Cost
                </p>
                <span>
                EGP 54,103,808
                </span>
            </div>
            <div className={`${styles.investDetailsBody}`}>
                {
                    investDetailsBodyItems?.map((item, index) => (
                        <div key={index} className={`${styles.investDetailsItem}`}>
                            <p>
                            {item.investName}
                            </p>
                            <span>
                            {item.investValue}
                            </span>
                        </div>
                    ))
                }
            </div>
            <p className={styles.investNote}>
                These amounts are exclusive of ooners fees.
            </p>
            <div className={styles.investExpDate}>
                <p>
                Estimated exit date
                </p>
                <span>
                23 Jul 2029
                </span>
            </div>
        </div>
    </div>
  )
}
