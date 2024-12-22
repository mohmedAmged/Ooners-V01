"use client"
import { useState } from 'react';
import styles from './creditCardMethod.module.css'
import Image from 'next/image';
interface CreditCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    savedCards: { cardImg: any }[];
  }
  const CreditCardMethod: React.FC<CreditCardProps> = ({ savedCards }) => {
    const [showAddCard, setShowAddCard] = useState(false);

    const handleAddCardClick = () => {
      setShowAddCard(!showAddCard);
    };
  return (
    <div className={`${styles.creditCardMethod__handler}`}>
            {/* Saved Cards */}
            <div className={styles.savedCards}>
                <h2>Saved Cards</h2>
                <div className={`card-grid ${styles.cardItems}`}>
                {savedCards.map((card, index) => (
                    <div key={index} className={styles.cardItem}>
                        <Image className={styles.cardImg} src={card.cardImg} alt={`img-${index}`} />
                    </div>
                ))}
                </div>
            </div>

            {/* Add New Card */}
            <button
                type="button"
                onClick={handleAddCardClick}
                className={`${styles.addNewCardButton} ${
                showAddCard ? styles.addNewCardButtonOpen : ''
                }`}
            >
                Add New Card
                <span className={styles.arrowIcon}>
                {showAddCard ? (
                    <svg
                    width="15"
                    height="10"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M0 3L5 0L10 3"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                ) : (
                    <svg
                    width="15"
                    height="10"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10 3L5 6L0 3"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                )}
                </span>
            </button>
            {showAddCard && (
                <form className={`${styles.cardFormHandler}`}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className={styles.formInput}>
                            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                                Name on Card
                            </label>
                            <input
                                type="text"
                                id="nameOnCard"
                                name="nameOnCard"
                                // value={cardDetails.nameOnCard}
                                // onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className={styles.formInput}>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                // value={cardDetails.cardNumber}
                                // onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className={styles.formInput}>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                // value={cardDetails.expiryDate}
                                // onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className={styles.formInput}>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                // value={cardDetails.cvv}
                                // onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`mt-4 font-bold py-3 px-4 rounded ${styles.formBtnCard}`}
                    >
                        SAVE
                    </button>
                </form>
            )}

    </div>
)
};
export default CreditCardMethod;

