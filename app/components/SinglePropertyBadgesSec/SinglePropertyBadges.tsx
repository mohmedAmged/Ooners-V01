import React from 'react'
import styles from './singlePropertyBadges.module.css'
import badgeIcon1 from '../../imgs/singleProperty/hugeicons_building-03.png'
import badgeIcon2 from '../../imgs/singleProperty/carbon_area.png'
import badgeIcon3 from '../../imgs/singleProperty/solar_bed-linear.png'
import badgeIcon4 from '../../imgs/singleProperty/iconoir_bathroom.png'
import Image from 'next/image'

interface BadgeCardItem {
    badgeName: string;
    badgeValue: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any; 
}
export default function SinglePropertyBadges() {
    const badgeItems : BadgeCardItem[] =[
        {
            badgeName: 'UNIT PRICE',
            badgeValue: '37,532,100 EGP', 
            icon: badgeIcon1
        },
        {
            badgeName: 'Property Type',
            badgeValue: 'Marina 2BR Chalet', 
            icon: badgeIcon1
        },
        {
            badgeName: 'Area',
            badgeValue: '136 m', 
            icon: badgeIcon2
        },
        {
            badgeName: 'Bedrooms',
            badgeValue: '2 Beds', 
            icon: badgeIcon3
        },
        {
            badgeName: 'Bathrooms',
            badgeValue: '2 Baths', 
            icon: badgeIcon4
        },
    ]
  return (
    <section>
        <div className='singlePropertyBadges__handler container py-8 lg:max-w-6xl px-6 m-auto'>
            <div className={`${styles.badgeCards}`}>
                {
                    badgeItems.map((item, index) => (
                        <div key={index} className={`${styles.badgeCard}`}>
                            <div className={`${styles.badgeHead}`}>
                                <Image className={styles.badgeIcon} src={item.icon} alt={item.badgeName} width={24} height={24} />
                                <p>
                                    {item.badgeName}
                                </p>
                            </div>
                            <h2>
                                {item.badgeValue}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
