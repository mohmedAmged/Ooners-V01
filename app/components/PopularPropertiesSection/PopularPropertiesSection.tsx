"use client"
import Link from "next/link";
import MainSectionHead from "../MainSectionHead/MainSectionHead";
import PopularPropertiesCard from "../PopularPropertiesCard/PopularPropertiesCard";
import usePropertiesStore from "../../store/AllProperties";
import { useEffect } from "react";
interface PopularPropertiesSection {
    number_of_investors: string
}
export default function PopularPropertiesSection() {
    const { properties, fetchProperties } = usePropertiesStore();
    useEffect(() => {
        fetchProperties();
      }, []);
      
    return (
        <section>
            <div className="container py-16 lg:max-w-6xl px-6 m-auto">
                <MainSectionHead heading="Popular Properties" />
                {
                    properties?.slice(0,3)?.map((property) => (
                        <PopularPropertiesCard key={property?.id} id={property?.id} title={property?.title} main_image={property?.main_image} short_description={property?.short_description} purchase_price={property?.purchase_price} net_yearly_income={property?.net_yearly_income} funded_percentage={property?.funded_percentage} funded_amount={property?.funded_amount} number_of_investors={property?.number_of_investors ?? ''} min_investment_amount={property?.min_investment_amount}/>
                    ))
                }
                
                <div className="mt-10 text-center">
                    <Link
                        href='/dashboard/properties'
                        className={`
                        bg-transparent border border-black text-black font-semibold rounded-lg 
                        bg-white shadow-md
                        hover:bg-black hover:text-white hover:border-black transition-all duration-300
                        px-6 py-2
                    `}
                    >
                        View all properties
                    </Link>
                </div>
            </div>
        </section>
    );
};