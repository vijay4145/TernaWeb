import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Activities } from '../Profile_Page_Components/Activities'
import { LinksSection } from '../Profile_Page_Components/LinksSection'
import { Profile1 } from '../Profile_Page_Components/Profile1'
import { UserDetails } from '../Profile_Page_Components/UserDetails'
import { getUserDetails, getUserDetailsUsingid } from "../../http/index";
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const MyProfile = () => {
  const location = useLocation();
  const [profiledata, setProfiledata] = useState(null);
  useEffect(() => {
    const path = location.pathname.split('/').slice(-1);
    if(location.pathname.split('/')[1] === 'my-profile'){
      onAuthStateChanged(getAuth(), async(user)=>{
        if(user !== null && location.pathname.split('/')[1] === 'my-profile'){
          getUserDetails().then(res=>{
            setProfiledata(res.data);
          })
        }
      })
    }else{
      getUserDetailsUsingid(path).then(res=>{
        setProfiledata(res.data);
      })
    }

  }, [])
  
  return (
    <>
    <section className='bg-gray-100'>
      <section id='top-heading' className='p-4'>
        <div className='pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm'>
          <span className='text-blue-600'>
            <Link to='/'>Home /</Link>  </span> User Profile
        </div>
      </section>

      <section id='information-section' className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-4'>
        <div id='profile' className='flex bg-white rounded-lg p-3 shadow-lg'>
          <Profile1 data={profiledata}/>
        </div>
        <div id='user-details' className='bg-white rounded-lg p-3 md:col-span-2 '>
          <UserDetails data={profiledata}/>
        </div> 
        <div id='user-link' className='bg-white rounded-lg p-3 '>
          <LinksSection data={profiledata}/>
        </div>
        <div id='user-activity' className='bg-white rounded-lg p-3 md:col-span-2'>
          <Activities data={profiledata}/>
        </div>
      </section>

      <br/>
      <br/>
    </section>
    </>
  )
}
