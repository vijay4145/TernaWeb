import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getEventDetails, getEventOverviewList } from '../../http';
import { EventCard } from './EventCard';

export const EventList = (props) => {
    const [eventsList, setEventsList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const filter = queryParams.get('filter') || 'all';
        getEventOverviewList(filter).then((response)=>{
          setEventsList(response.data)
          props.setProgress(100);
        })
      }, []);
    
  return (
    <>
        <div id="EventList" data-aos="zoom-in" className="flex gap-4 grid-cols-3 overflow-scroll  scrollbar-hide ">
            {eventsList && eventsList.length > 0 && eventsList.map((eve, i) => {
              return <EventCard event={eve} keys={i} key={i}/> ;
            })}

        </div>
    </>
  )
}
