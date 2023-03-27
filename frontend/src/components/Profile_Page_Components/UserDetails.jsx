import React from 'react'
import { useSelector } from 'react-redux'
import '../../css/ScrollbarHide.css'

export const UserDetails = ({data}) => {
  
  return (
    <>
    { data && <section className='h-full p-2 px-3 grid grid-cols-2' >
        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Full Name</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>{data.USER_NAME}</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Email</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>{data.USER_EMAIL}</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>College</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Terna Engineering College</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Year</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>{data.CURRENT_YEAR}</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Branch</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>{data.BRANCH}</h4>
        <hr className='col-span-2 mt-2'/>

    </section>
    }
    </>
  )
}
