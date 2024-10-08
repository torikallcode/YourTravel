import React from 'react'
import { Link } from 'react-router-dom'

export const Dropdowndsy = ({ classname }) => {
  return (
    <div className="relative group">
      <div className={`${classname} btn p-0 bg-transparent font-normal shadow-none border-none text-white cursor-pointer text-base font-secondary hover:bg-transparent`}>
        Package
      </div>
      <div className="absolute top-[100%] hidden group-hover:block rounded-lg z-[1] w-52 p-2 bg-abu-0 shadow text-putih-0">
        <div className='flex flex-col items-start justify-between p-1 gap-y-1'>
          <Link className='w-full h-full p-3 rounded-lg hover:bg-hitam-0' t
            to="/rinjaniTour"
            onClick={() => window.scrollTo({ top: 0 })}>
            <a className='w-full h-full'>RInjani Tour</a>
          </Link>
          <Link className='w-full h-full p-3 rounded-lg hover:bg-hitam-0'
            to="/trekkingSummit" onClick={() => window.scrollTo({ top: 0 })}>
            <a className='w-full h-full'>Trekking Summit</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
