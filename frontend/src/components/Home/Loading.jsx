import React from 'react'
import loadingAnimation from '../../lottie_animation/loading_animation_2.json';
import Lottie from 'lottie-react';

const Loading = () => {
  return (
    <div className='absolute w-[100%] h-[100%] items-center justify-center flex border'>
      <Lottie animationData={loadingAnimation} className='h-52 w-52 '/>
    </div>
  )
}

export default Loading
