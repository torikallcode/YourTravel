import React from 'react'
import { useState } from 'react'
import { NavbarDsy } from '../ui/NavbarDsy'
import { FooterDsy } from '../ui/FooterDsy'
import { DataTour } from '@/data/DataTour'
import { CardTracking } from '../fragments/Cards/CardTracking'

export const TourLayout = () => {

  const [dataTours, setDataTours] = useState(DataTour)


  return (
    <>
      <NavbarDsy className={'fixed z-50'}></NavbarDsy>
      <section className="relative h-[50dvh] bg-center bg-cover bg-no-repeat gradient-mask-b-70" style={{ backgroundImage: "url('img/aboutme1.jpg')" }}>
        <span className='w-full h-full bg-hitam-0 absolute top-0 left-0 opacity-50 z-10'></span>
        <div className='flex flex-col items-center justify-center w-full h-full px-5 md:px-11 xl:px-20 xl:max-w-[87rem] mx-auto z-20 relative'>
          <h1 className="text-putih-0 font-tomorrow text-3xl xl:text-3xl font-semibold text-center">Rinjani Tour</h1>
          <p className="text-gray-200 font-secondary text-center text-sm xl:text-base max-w-3xl">Nikmati perjalanan eksklusif ke Gunung Rinjani, dirancang untuk memberikan pengalaman mendaki yang memadukan petualangan dan keindahan alam Lombok.
          </p>
        </div>
      </section>
      <div className="bg-hitam-0 py-32 lg:py-16 pb-32 w-full px-8 md:px-11 xl:px-20 xl:max-w-[90rem] mx-auto">
        <section className='w-full flex'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 lg:gap-y-7 gap-x-7 mb-5 mx-auto w-full">
            {dataTours.map((item, index) => (
              <div key={index} className="">
                <CardTracking
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  days={item.days}
                  desc={item.desc}
                  rating={item.rating}
                  price={item.price}
                  aspect='aspect-[7/8]'
                />
              </div>
            ))}
          </div>
        </section >
      </div>
      <FooterDsy></FooterDsy>
    </>
  )
}