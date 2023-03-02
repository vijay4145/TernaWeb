import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export const AccountLinkDisplay = (props) => {
    const removeLink = ()=>{
      console.log(props.index);
        var newLinkArray = props.links;
        let indextoremove = props.links.indexOf(props.link);
        console.log("indextoremove is ", indextoremove);
        if(newLinkArray.length > 1){
          newLinkArray.splice(indextoremove,1);
          props.setLinks([...newLinkArray])
        }
        else props.setLinks(...[])
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
