import ShowSingleProperty from '@/app/components/ShowSinglePropertySec/ShowSingleProperty';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "single Property",
};
interface PropertyPageParams {
  propertyName: number;
}

interface PropertyPageProps {
  params: Promise<PropertyPageParams>;
}
export default async function PropertyPage({ params }: PropertyPageProps) {
  const {propertyName} =  await params;
  return (
    <>
        <ShowSingleProperty newPropertyName={propertyName}/>
    </>
  )
}
