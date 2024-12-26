"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from './singlePropertyGallery.module.css';

interface ImageData {
  src: string;
}

const SinglePropertyGallery: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for next and previous navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto py-16 px-4">
        {/* Image Container */}
        <div className="relative">
          <Image
            src={images[currentIndex]?.src || ''} // Handle empty array
            alt={`Property ${currentIndex + 1}`}
            className="rounded-lg object-cover"
            width={1312}
            height={885}
            priority 
          /> 
        </div>

        {/* Navigation Buttons (Below the Image) */}
        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            onClick={handlePrev}
            className={` rounded-full shadow-md w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition ${styles.btnNavigation}`}
          >
            ❮
          </button>
          <div className={`text-gray-600 font-medium ${styles.textPaginate}`}>
            {currentIndex + 1} / {images.length}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className={`bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition ${styles.btnNavigation}`}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default SinglePropertyGallery;