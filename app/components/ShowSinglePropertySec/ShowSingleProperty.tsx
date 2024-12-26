"use client"
import usePropertyStore from "@/app/store/PropertyDetails";
import SinglePropertyAllDetails from "../SinglePropertyAllDetailsSec/SinglePropertyAllDetails";
import SinglePropertyBadges from "../SinglePropertyBadgesSec/SinglePropertyBadges";
import SinglePropertyGallery from "../SinglePropertyGallerySec/SinglePropertyGallery";
import SinglePropertyHeader from "../SinglePropertyHeaderSec/SinglePropertyHeader";
import SinglePropertyRangeInfo from "../SinglePropertyRangeInfoSec/SinglePropertyRangeInfo";
import { useEffect } from "react";
import PropertyDetails from "@/app/interfaces/propertyDetailsTypes";

interface ShowSingleProperty {
  newPropertyName: number,
}
// ShowSingleProperty
const ShowSingleProperty: React.FC<ShowSingleProperty> = ({
  newPropertyName,
}) =>{
    const { fetchProperty, propertyDetails, loading, error } = usePropertyStore();

    useEffect(() => {
      if (newPropertyName) {
        fetchProperty(newPropertyName); 
      }
    }, [newPropertyName, fetchProperty]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    //   console.log(propertyDetails);
      
  return (
    <>
    <SinglePropertyHeader propertyName={propertyDetails?.title ?? ''} propertyDescription={propertyDetails?.short_description ?? ''}/>
    <SinglePropertyRangeInfo number_of_investors={propertyDetails?.number_of_investors ?? ''} funded_percentage={propertyDetails?.funded_percentage ?? ''} funded_amount={propertyDetails?.funded_amount ?? ''} ispadding='true'/>
    <SinglePropertyGallery images={propertyDetails?.images?.map((image) => ({
      src: image.file,
      id: image.id,
      type: image.type,
      fileName: image.file_name,
    })) ?? []} />
    <SinglePropertyBadges  
            bedrooms={propertyDetails?.bedrooms_count ?? 0} 
            bathrooms={propertyDetails?.bathrooms_count ?? 0}
            area={propertyDetails?.area ?? ''}  
            unitPrice={propertyDetails?.purchase_price ?? ''}
            propertyType={propertyDetails?.listing_type ?? ''}
            />
    <SinglePropertyAllDetails propertyDetails={propertyDetails as PropertyDetails} propertyName={newPropertyName} />
</>
  )
}
export default ShowSingleProperty;
