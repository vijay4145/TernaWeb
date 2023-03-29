import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { AddCommittee } from './AddCommittee'
import { CommitteesListCard } from './CommitteesListCard'
import  { getCommittee } from '../../http/index'

export const CommitteesList = (props) => {

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
      })
    }, [])
    

  return (
    <>

     <section id='CommitteesList' className='min-h-[82vh]'>
        <h1 className='text-blue-900 font-semibold text-3xl'>Committees :</h1>
        <div className='flex flex-row gap-7 flex-wrap mt-5'>
            {committeesList && committeesList.length >0 && committeesList.map((committee, i)=>{
              return <CommitteesListCard committee={committee} key={i}/>
            })}
        </div>
    </section>
    </>
  )
}
