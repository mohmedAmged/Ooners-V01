import React from 'react'
import styles from './singlePropertyRange.module.css'
export default function SinglePropertyRangeInfo({ ispadding }: { ispadding: string }) {
  return (
    <div className={`${styles.singlePropertyRange__handler} container py-4 lg:max-w-6xl m-auto`}>
        <div className={`${styles.sliderHandler} ${ispadding === 'true' ? styles.addPad : styles.removePad}`}>
            <div className={`${styles.sliderLabels}`}>
                <label htmlFor="">AED 1,179,000</label>
                <label htmlFor="">60% funded (364 Investors)</label>
            </div>
            <input
                placeholder='..'
                type="range"
                min="€250"
                max={100}
                defaultValue={60}
                className={`h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 ${styles.slider}`}
            />
        </div>
    </div>
  )
}
