import React from 'react'
import { useState } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { AddCommittee } from './AddCommittee'
import { CommitteesListCard } from './CommitteesListCard'

export const CommitteesList = () => {
    const [formVisible, setFormVisible] = useState(false);
    const toggleFormVisibility = ()=>{
        if(formVisible) setFormVisible(false);
        else setFormVisible(true);
    }

  return (
    <>
    <section>
        <div className="floating-Add-Button fixed bottom-4 right-5 z-10">
        <button type="button" className= "rounded-full hover:bg-blue-900 text-6xl bg-blue-600" onClick={toggleFormVisibility}>
            {!formVisible && <AiOutlinePlusCircle color="#ffffff"/>}
            {formVisible && <AiFillCloseCircle color="#ffffff"/>}
        </button>
      </div>
    </section>

    {formVisible && <AddCommittee toggleFormVisibility={toggleFormVisibility}/>}

    {!formVisible && <section id='CommitteesList' className='m-5 '>
        <h1 className='text-blue-900 font-semibold text-3xl'>Committees :</h1>
        <div className='flex flex-row gap-4 flex-wrap mt-5 justify-between'>
            <CommitteesListCard/>
            <CommitteesListCard/>
            <CommitteesListCard/>
        </div>
    </section>}
    </>
  )
}
