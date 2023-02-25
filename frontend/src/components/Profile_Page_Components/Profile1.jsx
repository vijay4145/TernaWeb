import React from 'react'

export const Profile1 = () => {
    const imgUrl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  return (
    <>
    <section className='flex items-center flex-col w-[100%] h-[100%]'>
        <img src={imgUrl} alt="" className='w-40 rounded-full'/>
        <h2 className='text-2xl mt-2'>
          Viju bhai
        </h2>
        <div id='button-div' className='flex gap-2 mt-2'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:shadow-lg '>Follow</button>
            <button className='bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded hover:shadow-lg'>Message</button>
        </div>
        <br/>
    </section>
    </>
  )
}
