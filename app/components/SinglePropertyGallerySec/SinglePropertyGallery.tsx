"use client";
import React, { useState } from "react";
import Image from "next/image";
import propertyImg1 from "../../imgs/home/popularProperties/4a8650af84740fda285d887d978ec878.jpg";
import propertyImg2 from "../../imgs/home/popularProperties/WhatsApp Image 2023-09-24 at 23.45.51.jpg";
import styles from './singlePropertyGallery.module.css'
const SinglePropertyGallery: React.FC = () => {
  const propertyGalleryItems = [
    { src: propertyImg1 },
    { src: propertyImg2 },
    { src: propertyImg1 },
    { src: propertyImg2 },
    { src: propertyImg1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for next and previous navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? propertyGalleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === propertyGalleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto py-16 px-4">
        {/* Image Container */}
        <div className="relative">
          <Image
            src={propertyGalleryItems[currentIndex].src}
            alt={`Property ${currentIndex + 1}`}
            className="rounded-lg object-cover"
            width={1312}
            height={885}
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
            {currentIndex + 1} / {propertyGalleryItems.length}
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
