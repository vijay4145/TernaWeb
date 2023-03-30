import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getEventOverviewList } from '../../http';
import { EventCard } from './EventCard';
import loading_animation from '../../lottie_animation/loading_animation_2.json'
import Lottie from 'lottie-react';

export const EventList = (props) => {
    const [eventsList, setEventsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const filter = queryParams.get('filter') || 'all';
        getEventOverviewList(filter).then((response)=>{
          setEventsList(response.data)
          // props.setProgress(100);
          setIsLoading(false);
        })
      }, []);
    
  return (
    <>
<div className='w-full flex items-center justify-center' >

    <section id='loading' className={`${isLoading ? '':'hidden'} top-0 max-w-md`}>
      <Lottie animationData={loading_animation} />
    </section>
</div>
        <div id="EventList" className="z-10 flex flex-wrap gap-4 grid-cols-3 overflow-scroll  scrollbar-hide ">
            {eventsList && eventsList.length > 0 && eventsList.map((eve, i) => {
              return <EventCard event={eve} keys={i} key={i}/> ;
            })}

        </div>
    </>
  )
}
