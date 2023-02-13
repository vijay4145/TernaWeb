import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { AddCommittee } from './AddCommittee'
import { CommitteesListCard } from './CommitteesListCard'
import  { getCommittee } from '../../http/index'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const CommitteesList = () => {

    const [formVisible, setFormVisible] = useState(false);
    const toggleFormVisibility = ()=>{
        if(formVisible) setFormVisible(false);
        else setFormVisible(true);
    }
    const [committeesList, setCommitteesList] = useState([])

    useEffect(() => {
      getCommittee().then(response=>{
        setCommitteesList(response.data);
      })
    }, [])
    

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
        <div className='flex flex-row gap-7 flex-wrap mt-5'>
            {committeesList.map((committee, i)=>{
              return <CommitteesListCard committee={committee} key={i}/>
            })}
        </div>
    </section>}
    </>
  )
}
