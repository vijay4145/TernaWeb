import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { EventCard } from './EventCard';

export const Events = (props) => {

  useEffect(() => {
    props.setProgress(100);
  }, [])

  AOS.init();

  return (
    <>
      <section id='upcomingEvents' className='mt-3 mx-4'>
        
        <h1 className='text-blue-900 font-semibold text-3xl'>Upcoming Events :</h1>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>

      </section>

      <br/>
      <br/>
      <br/>
      <section id='pastEvents' className='mt-3 mx-4'>
        <h1 className='text-blue-900 font-semibold text-3xl'>Past Events :</h1>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </section>

      <br/>
      <br/>
    </>
  )
}
