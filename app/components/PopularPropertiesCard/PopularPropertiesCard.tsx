import Image from "next/image";
import cardImage from '../../imgs/home/popularProperties/4a8650af84740fda285d887d978ec878.jpg';
import Link from "next/link";

export default function PopularPropertiesCard() {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full mt-16">
            <Image
                src={cardImage}
                alt="Property card Image"
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
                    <Link href={'properties/Marina 2BR Chalet in SouthMED'}>
                    Marina 2BR Chalet in SouthMED
                    </Link>
                </h2>
                <p className="text-[#0000008F]">
                    Talaat Moustafa Group (TMG) Holding | North Coast – Al Dabaa
                </p>
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 gap-y-5">
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">purchase price</span>
                            <span className="font-semibold text-black">€370,530 </span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">5 year total return</span>
                            <span className="font-semibold text-black">49.84%</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">yearly investment return</span>
                            <span className="font-semibold text-black">9.84%</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#000000] font-semibold">
                            <span className="capitalize">projected net yield</span>
                            <span className="font-semibold text-black">5.4%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};