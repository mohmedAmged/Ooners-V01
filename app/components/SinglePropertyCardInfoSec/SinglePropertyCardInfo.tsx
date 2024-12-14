import React from 'react';
import styles from './singlePropertyCard.module.css'
interface SinglePropertyCardInfoProps {
  cardHeader: string;
  cardText: string;
}

const SinglePropertyCardInfo: React.FC<SinglePropertyCardInfoProps> = ({ cardHeader, cardText }) => {
  return (
    <div className={`${styles.singlePropertyCardInfo__handler}`}>
        <h2>{cardHeader}</h2>
        <p>{cardText}</p>
    </div>
  );
};

export default SinglePropertyCardInfo;

