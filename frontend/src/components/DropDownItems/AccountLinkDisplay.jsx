import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export const AccountLinkDisplay = (props) => {
    const removeLink = ()=>{
        let newLinkArray = props.links;
        newLinkArray.splice(props.index,1);
        props.setLinks([...newLinkArray])
    }
  return (
    <>
    <div className='flex gap-2 items-center underline text-blue-900 pt-1 pb-1 px-3 pr-3 bg-blue-200 max-w-fit rounded-full'>
        <a href={props.link} target='_blank'>{props.link}</a>
        <div onClick={removeLink}><AiFillCloseCircle/></div>
    </div>
    </>
  )
}
