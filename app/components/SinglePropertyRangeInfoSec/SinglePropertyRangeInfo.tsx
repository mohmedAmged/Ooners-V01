import React from 'react'
import styles from './singlePropertyRange.module.css'
interface SinglePropertyRange {
  ispadding: string;
  funded_amount: string;
  funded_percentage: string
  number_of_investors: string
}
// SinglePropertyRangeInfo
const SinglePropertyRangeInfo: React.FC<SinglePropertyRange> = ({
  ispadding  ,
  funded_amount,
  funded_percentage,
  number_of_investors
}) =>{
  console.log(funded_amount);

  return (
    <div className={`${styles.singlePropertyRange__handler} container py-4 lg:max-w-6xl m-auto`}>
        <div className={`${styles.sliderHandler} ${ispadding === 'true' ? styles.addPad : styles.removePad}`}>
            <div className={`${styles.sliderLabels}`}>
                <label htmlFor="">€{funded_amount}</label>
                <label htmlFor="">{funded_percentage}% funded ({number_of_investors} inverstors)</label>
            </div>
            {/* <input
                placeholder='..'
                type="range"
                min="€250"
                max={100}
                defaultValue={funded_percentage}
                className={`h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 ${styles.slider}`}
            /> */}
            <div 
          className={`h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 ${styles.slider}`} 
          style={{ 
            background: `linear-gradient(90deg, #1D74DB 0%, #0F3E75 ${funded_percentage}%, #E5E5E5 ${funded_percentage}%, #E5E5E5 100%)` 
          }}
        >
          <span 
            className={`absolute top-0 left-0 w-[${funded_percentage}%] h-full bg-blue-200 rounded-full`} 
          />
        </div>
        </div>
    </div>
  )
}
export default SinglePropertyRangeInfo;

