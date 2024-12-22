import ChoosePaymentDetails from "@/app/components/ChoosePaymentDetailsSec/ChoosePaymentDetails";
import { Metadata } from "next";
import { cookies } from "next/headers"

export const metadata: Metadata = {
    title: "Ooners Invest",
};
export default async function InvestPage() {
    const cookiesData = await cookies()
    const propertyName = cookiesData.get('propertyNameStore')?.value
    console.log(propertyName, propertyName);
    
  return (
    <>
        <ChoosePaymentDetails propertyName={propertyName ?? ''}/>
    </>
  )
}
