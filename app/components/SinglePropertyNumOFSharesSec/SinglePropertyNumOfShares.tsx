"use client"
import React, { useState } from 'react';
import styles from './singlePropertyShares.module.css'
interface NumberOfSharesProps {
  availableShares: number;
}

const SinglePropertyNumOfShares: React.FC<NumberOfSharesProps> = ({ availableShares }) => {
  const [shares, setShares] = useState(250);

  const handleIncrease = () => {
    if (shares < availableShares) {
      setShares(shares + 250);
    }
  };

  const handleDecrease = () => {
    if (shares > 250) {
      setShares(shares - 250);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShares(Number(e.target.value));
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700 flex items-center">
        Investment Overview <span className={`ml-1 text-gray-500 ${styles.iconHref}`}>ℹ️</span>
        </label>
        <span className="text-sm font-medium text-gray-500">
          Max €{availableShares}
        </span>
      </div>

      <div className={`flex items-center ${styles.numOFShare_actions}`}>
        {/* Slider */}
        <div className={`${styles.sliderRange_handler}`}>
            <input
            placeholder='..'
            type="range"
            min="€250"
            max={availableShares}
            value={shares}
            onChange={handleSliderChange}
            className="h-2 bg-blue-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
            />

            {/* Value below the slider */}
            <p className="text-blue-600 font-semibold text-lg">{shares}</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
          type='button'
            onClick={handleDecrease}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            −
          </button>
          <button
          type='button'
            onClick={handleIncrease}
            className="w-10 h-10 flex items-center justify-center border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyNumOfShares;
