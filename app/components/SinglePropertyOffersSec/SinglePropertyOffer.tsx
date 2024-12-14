import React from 'react';
import styles from './singlePropertyOffer.module.css';
import Image from 'next/image';

interface OfferItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offerIcon: any;
  offerName: string;
}

interface SinglePropertyOfferProps {
  offersItems: OfferItem[];
  headText: string;
}

const SinglePropertyOffer: React.FC<SinglePropertyOfferProps> = ({ offersItems, headText }) => {
  return (
    <div className={`${styles.singlePropertyOfferHandler}`}>
      <h2>{headText}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {offersItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-4 "
          >
            <Image src={item.offerIcon} alt={item.offerName} className="w-8 h-8" />
            <span className="text-gray-700 font-medium">{item.offerName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePropertyOffer;
