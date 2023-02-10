import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

export const HastTagCards = (props) => {
  const removeTag = (e)=>{
    e.preventDefault();
    let newArray = props.hashTags;
    newArray.splice(props.keys, 1);
    props.setHashTags([...newArray]);
  }

  return (
    <>
    <div className='flex flex-row gap-1 bg-blue-900 text-white max-w-fit px-2 rounded-lg'>

      <h1 className='break-all'> #{props.hashTag} </h1>
      <button onClick={removeTag}>
        <div className='flex flex-col content-center justify-center'><AiFillCloseCircle/></div>
      </button>
    </div>
    </>
  )
}
