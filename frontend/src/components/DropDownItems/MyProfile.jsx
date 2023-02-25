import React from 'react'
import { Link } from 'react-router-dom'
import { Activities } from '../Profile_Page_Components/Activities'
import { LinksSection } from '../Profile_Page_Components/LinksSection'
import { Profile1 } from '../Profile_Page_Components/Profile1'
import { UserDetails } from '../Profile_Page_Components/UserDetails'

export const MyProfile = () => {
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
          <Profile1/>
        </div>
        <div id='user-details' className='bg-white rounded-lg p-3 md:col-span-2 '>
          <UserDetails/>
        </div>
        <div id='user-link' className='bg-white rounded-lg p-3 '>
          <LinksSection/>
        </div>
        <div id='user-activity' className='bg-white rounded-lg p-3 md:col-span-2'>
          <Activities/>
        </div>
      </section>

      <br/>
      <br/>
    </section>
    </>
  )
}
