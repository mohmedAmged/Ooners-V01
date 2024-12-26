"use client"

import usePropertiesStore from "@/app/store/AllProperties";
import { useEffect } from "react";
import PopularPropertiesCard from "../PopularPropertiesCard/PopularPropertiesCard";
import PropertyDetails from "@/app/interfaces/propertyDetailsTypes";

export default function AllProperties() {
    const { properties, fetchProperties } = usePropertiesStore();
    useEffect(() => {
        fetchProperties();
      }, []);
    
      
  return (
    <div>
      {
        properties?.map((property)=>(
            <PopularPropertiesCard id={property?.id} key={property?.id} title={property?.title} main_image={property?.main_image} short_description={property?.short_description} purchase_price={property?.purchase_price} projected_net_yield={property?.projected_net_yield} net_yearly_income={property?.net_yearly_income} funded_percentage={property?.funded_percentage} funded_amount={property?.funded_amount} number_of_investors={property?.number_of_investors} min_investment_amount={property?.min_investment_amount}/>
        ))
      }
    </div>
  )
}
