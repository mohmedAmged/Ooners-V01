import SinglePropertyBadges from '@/app/components/SinglePropertyBadgesSec/SinglePropertyBadges';
import SinglePropertyGallery from '@/app/components/SinglePropertyGallerySec/SinglePropertyGallery';
import SinglePropertyHeader from '@/app/components/SinglePropertyHeaderSec/SinglePropertyHeader';
import React from 'react'

interface PropertyPageParams {
    propertyName: string;
  }
  
  interface PropertyPageProps {
    params: PropertyPageParams;
  }
export default async function propertyPage({ params }: PropertyPageProps) {
    const propertyName = decodeURIComponent(params.propertyName);
  return (
    <>
        <SinglePropertyHeader propertyName={propertyName}/>
        <SinglePropertyGallery />
        <SinglePropertyBadges />
    </>
  )
}
