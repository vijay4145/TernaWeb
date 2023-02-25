import React from 'react'
import {FcLink} from 'react-icons/fc';

export const LinksSection = () => {
  return (
    <>
    <h1 className='text-lg ml-3 text-blue-500 font-semibold mb-1'>Links:</h1>
    <section className='flex gap-2 flex-col'>
        <div className='flex gap-2 items-center'>
            <FcLink/>
            <a href="https://www.google.com" className='hover:text-blue-600 underline'> https://www.google.com</a>
        </div>
        <div className='flex gap-2 items-center'>
            <FcLink/>
            <a href="https://www.google.com"  className='hover:text-blue-600 underline'> https://www.google.com</a>
            
        </div>
    </section>
    </>
  )
}
