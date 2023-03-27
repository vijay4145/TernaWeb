import React from 'react'

const images = [
    'https://img.freepik.com/free-vector/flat-new-year-twitch-banner_23-2149194621.jpg?w=826&t=st=1679930122~exp=1679930722~hmac=de635d868b50881c078982de4340674ac253493f73ffbcdd2bde4a5051e0ced2',
    'https://img.freepik.com/free-vector/flat-new-year-twitch-banner_23-2149194621.jpg?w=826&t=st=1679930122~exp=1679930722~hmac=de635d868b50881c078982de4340674ac253493f73ffbcdd2bde4a5051e0ced2'
]


export const Carousel = () => {
  return (
    <>
    <div className='relative'>

        <div className='w-full rounded-xl shadow-xl overflow-hidden'>
            <img src={images[0]} alt="" className='min-w-full h-32 object-fill' />
        </div>

        <div id='slider' className='absolute bottom-3 mx-auto gap-2 flex flex-row' style={{left:'50%', transform:'translate(-50%,-50%)'}}>
            <div className='p-1 md:p-2 max-w-fit rounded-full bg-slate-300'></div>
            <div className='p-1 md:p-2 max-w-fit rounded-full bg-slate-300'></div>
            <div className='p-1 md:p-2 max-w-fit rounded-full bg-slate-300'></div>
        </div>
    </div>
    </>
  )
}
