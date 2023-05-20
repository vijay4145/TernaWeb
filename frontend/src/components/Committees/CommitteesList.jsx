import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CommitteesListCard } from './CommitteesListCard'
import  { getCommittee } from '../../http/index'
import "aos/dist/aos.css";
import {AiOutlinePlusSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react';
import AOS from "aos";
import loading_animation from '../../lottie_animation/loading_animation_2.json'

export const CommitteesList = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [formVisible, setFormVisible] = useState(false);
    const toggleFormVisibility = ()=>{
        if(formVisible) setFormVisible(false);
        else setFormVisible(true);
    }
    const [committeesList, setCommitteesList] = useState([])

    useEffect(() => {
      getCommittee().then(response=>{
        setCommitteesList(response.data);
        props.setProgress(100);
        setIsLoading(false);
      })
    }, [])

    AOS.init({
      offset: 20
    });
    

  return (
    <>
     <section data-aos="zoom-in" id='CommitteesList' className='min-h-[82vh]'>
      <div className='flex gap-2 flex-wrap'>
        <h1 className='text-blue-900 font-semibold text-3xl'>Committees :</h1>
        <Link to='add-committee' className="bg-blue-400 max-w-fit p-2 rounded-lg text-white flex items-center">
          <AiOutlinePlusSquare className="h-7 w-7"/>
          <p>&nbsp;Add Committee</p>
        </Link>
      </div>
<div className='w-full flex items-center justify-center' >

<section id='loading' className={`${isLoading ? '':'hidden'} top-0 max-w-md`}>
  <Lottie animationData={loading_animation} />
</section>
</div>
        <div className='flex flex-row gap-7 flex-wrap mt-5'>
            {committeesList && committeesList.length >0 && committeesList.map((committee, i)=>{
              return <CommitteesListCard committee={committee} key={i}/>
            })}
        </div>
    </section>
    </>
  )
}
