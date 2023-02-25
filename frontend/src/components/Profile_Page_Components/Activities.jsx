import Lottie from "lottie-react";
import React from 'react'
import * as empty_box from '../../lottie_animation/empty_box.json';

export const Activities = () => {
  return (
    <>
    <h1 className="text-lg text-blue-500 ml-3">User Activities :</h1>
    <div id="no-activity" className="flex items-center flex-col">
        <Lottie animationData={empty_box} className='h-52'/>
        <h4 className="text-blue-500 font-bold text-lg">No activities</h4>
    </div>
    </>
  )
}
