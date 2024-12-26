"use client"
import Image from "next/image";
// import cardImage from '../../imgs/home/popularProperties/4a8650af84740fda285d887d978ec878.jpg';
import Link from "next/link";
import SinglePropertyRangeInfo from "../SinglePropertyRangeInfoSec/SinglePropertyRangeInfo";
interface PopularPropertiesCard {
    id: number;
    title: string;
    main_image: string;
    short_description: string;
    purchase_price: string;
    net_yearly_income: string;
    funded_percentage: string;
    funded_amount: string;
    number_of_investors: string;
    min_investment_amount: string;
}
  const PopularPropertiesCard: React.FC<PopularPropertiesCard> = ({
    id,
    title,
    main_image,
    short_description,
    purchase_price,
    // projected_net_yield,
    net_yearly_income,
    funded_percentage,
    funded_amount,
    number_of_investors,
    min_investment_amount
  }) => {  
    console.log(funded_amount);
    
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full mt-16">
            <Image
                src={main_image}
                alt={title}
                width={1450}
                height={600}
                className="w-full h-[500px] object-fill"
            />
            <div className="p-6 space-y-4">
                <div className="flex space-x-2">
                    <span className="bg-[#20027D] text-white text-sm px-3 py-1 rounded-full">
                        Residential
                    </span>
                    <span className="bg-[#20027D] text-white text-sm px-3 py-1 rounded-full">
                        Co-ownership
                    </span>
                </div>
                <h2 className="text-lg text-[#000000] font-semibold">
                    <Link href={`properties/${id}`}>
                    {title}
                    </Link>
                </h2>
                <p className="text-[#0000008F]">
                    {short_description}
                </p>
                <SinglePropertyRangeInfo number_of_investors={number_of_investors} funded_percentage={funded_percentage} funded_amount={funded_amount} ispadding="false"/>
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 gap-y-5">
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">purchase price</span>
                            <span className="font-semibold text-black">€{purchase_price} </span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">5 year total return</span>
                            <span className="font-semibold text-black">47.8%</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">yearly investment return</span>
                            <span className="font-semibold text-black">{net_yearly_income}%</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">minimum investment amount</span>
                            <span className="font-semibold text-black">€{min_investment_amount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PopularPropertiesCard;
