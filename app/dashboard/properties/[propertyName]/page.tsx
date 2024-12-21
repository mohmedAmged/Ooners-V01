import SinglePropertyAllDetails from '@/app/components/SinglePropertyAllDetailsSec/SinglePropertyAllDetails';
import SinglePropertyBadges from '@/app/components/SinglePropertyBadgesSec/SinglePropertyBadges';
import SinglePropertyGallery from '@/app/components/SinglePropertyGallerySec/SinglePropertyGallery';
import SinglePropertyHeader from '@/app/components/SinglePropertyHeaderSec/SinglePropertyHeader';
import SinglePropertyRangeInfo from '@/app/components/SinglePropertyRangeInfoSec/SinglePropertyRangeInfo';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "single Property",
};
interface PropertyPageParams {
  propertyName: string;
}

interface PropertyPageProps {
  params: Promise<PropertyPageParams>;
}
export default async function PropertyPage({ params }: PropertyPageProps) {
  const {propertyName} =  await params;
  const newPropertyName = decodeURIComponent(propertyName);
    console.log(newPropertyName);
  return (
    <>
        <SinglePropertyHeader propertyName={newPropertyName}/>
        <SinglePropertyRangeInfo />
        <SinglePropertyGallery />
        <SinglePropertyBadges />
        <SinglePropertyAllDetails propertyName={newPropertyName}/>
    </>
  )
}
