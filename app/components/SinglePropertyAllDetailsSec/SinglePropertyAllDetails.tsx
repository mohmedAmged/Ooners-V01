import React from 'react'
import SinglePropertyCardInfo from '../SinglePropertyCardInfoSec/SinglePropertyCardInfo'
import offIcon1 from '../../imgs/singleProperty/material-symbols-light_balcony.png'
import offIcon2 from '../../imgs/singleProperty/solar_garage-linear.png'
import offIcon3 from '../../imgs/singleProperty/fluent-mdl2_more-sports.png'
import offIcon4 from '../../imgs/singleProperty/iconoir_gym.png'
import offIcon5 from '../../imgs/singleProperty/solar_shop-outline.png'
import offIcon6 from '../../imgs/singleProperty/fluent_people-community-32-regular.png'
import SinglePropertyOffer from '../SinglePropertyOffersSec/SinglePropertyOffer'
import SinglePropertyDocument from '../SinglePropertyDocumentsSec/SinglePropertyDocument'
import SinglePropertyNumOfShares from '../SinglePropertyNumOFSharesSec/SinglePropertyNumOfShares'
import SinglePropertyPayDetails from '../SinglePropertyPayDetailsSec/SinglePropertyPayDetails'
import SinglePropertyInvestDetails from '../SinglePropertyInvestDetailsSec/SinglePropertyInvestDetails'
export default function SinglePropertyAllDetails({propertyName}:{propertyName: string}) {
  const offersItems = [
    {
      offerIcon:offIcon1,
      offerName: 'Balcony',
    },
    {
      offerIcon:offIcon2,
      offerName: 'Garage',
    },
    {
      offerIcon:offIcon3,
      offerName: 'Club house',
    },{
      offerIcon:offIcon4,
      offerName: 'Gym',
    },
    {
      offerIcon:offIcon5,
      offerName: 'Commercial District',
    },
    {
      offerIcon:offIcon6,
      offerName: 'Comnunity center',
    },

  ]
  const documentItems = [
    {
      docName: 'Unit & Project Details'
    },
    {
      docName: 'Investment Details'
    },
    {
      docName: 'Ooners Fees'
    },
    {
      docName: 'Late and Missed Payments'
    },
    {
      docName: 'Ownership Contract Draft'
    },
  ]
  return (
    <section>
      <div className='singlePropertyAllDetails__handler container py-16 lg:max-w-6xl px-6 m-auto'>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Column */}
              <div className="col-span-12 lg:col-span-8">
                <>
                  <SinglePropertyCardInfo cardHeader='Why invest in this unit?' cardText='This unit’s location is one of the best in the North Coast. It falls on the Marina, waterfront first row, facing north, a pool & with no buildings blocking its view of both the marina & sea! Demand for them is expected to keep increasing in the current inflationary environment where people keep getting priced out of the market for single family units.'/>
                  <SinglePropertyCardInfo cardHeader='About this property' 
                  cardText='For the first time in Egypt, experience SouthMEDs elevated Marina design, inspired by Mediterranean charm. Similar properties in Marassi Marina (first row sea-view chalets, directly on the marina and commercial area) are 210k/sqm in cash making them 89% more expensive than this unit (on NPV basis).'/>
                  <SinglePropertyOffer offersItems={offersItems} headText='What this property offers'/>
                  <SinglePropertyDocument documentItems={documentItems}  headText='Investment documents'/>
                </>
              </div>

              {/* Right Column */}
              <div className="col-span-12 lg:col-span-4 p-4 py-10 border border-gray-200 rounded-lg shadow-md bg-white">
                <>
                <SinglePropertyNumOfShares availableShares={30000}/>
                <SinglePropertyPayDetails propertyName={propertyName}/>
                <SinglePropertyInvestDetails />
                </>
              </div>
          </div>
      </div>
    </section>
  )
}
