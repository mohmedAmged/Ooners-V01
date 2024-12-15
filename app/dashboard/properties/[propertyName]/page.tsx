import SinglePropertyAllDetails from '@/app/components/SinglePropertyAllDetailsSec/SinglePropertyAllDetails';
import SinglePropertyBadges from '@/app/components/SinglePropertyBadgesSec/SinglePropertyBadges';
import SinglePropertyGallery from '@/app/components/SinglePropertyGallerySec/SinglePropertyGallery';
import SinglePropertyHeader from '@/app/components/SinglePropertyHeaderSec/SinglePropertyHeader';
import React from 'react'

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
        <SinglePropertyGallery />
        <SinglePropertyBadges />
        <SinglePropertyAllDetails />
    </>
  )
}
