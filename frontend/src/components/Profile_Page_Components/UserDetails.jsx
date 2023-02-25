import React from 'react'
import '../../css/ScrollbarHide.css'

export const UserDetails = () => {
  return (
    <>
    <section className='h-full p-2 px-3 grid grid-cols-2' >
        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Full Name</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>guest41</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Email</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>guest41@ternaweb.com</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>College</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Terna Engineering College</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Year</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>-</h4>
        <hr className='col-span-2 mt-2'/>

        <h3 className='text-lg mt-2 overflow-scroll scrollbar-hide'>Branch</h3>
        <h4 className='text-lg mt-2 overflow-scroll scrollbar-hide'>-</h4>
        <hr className='col-span-2 mt-2'/>

    </section>
    </>
  )
}
