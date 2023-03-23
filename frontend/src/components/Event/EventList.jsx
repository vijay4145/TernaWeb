import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getEventDetails } from '../../http';
import { EventCard } from './EventCard';

export const EventList = () => {
    const [eventsList, setEventsList] = useState([]);
    useEffect(() => {
        getEventDetails().then((response)=>{
          setEventsList(response.data)
        //   props.setProgress(100);
        })
      }, []);
    
  return (
    <>
            <div id="EventList" data-aos="zoom-in" className="col-span-2 overflow-scroll md:h-[86vh] scrollbar-hide ">
            {eventsList && eventsList.length > 0 && eventsList.map((eve, i) => {
              return <EventCard event={eve} keys={i} key={i}/> ;
            })}

        </div>
    </>
  )
}
