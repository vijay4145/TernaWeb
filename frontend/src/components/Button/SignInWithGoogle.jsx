import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import googleIcon from '../../lottie_animation/google.png';

const SignInWithGoogle = () => {
  return (
    <div className="flex gap-2 items-center bg-[#4B0082] text-base px-0.5 text-white shadow-lg hover:shadow-2xl rounded-sm hover:underline">
    <img src={googleIcon} alt="" className='bg-white w-7 h-7 p-1'/>
    <button className="px-2 flex justify-center w-full p-1 pr-4">Sign Up with Google</button>
  </div>
  )
}

export default SignInWithGoogle
