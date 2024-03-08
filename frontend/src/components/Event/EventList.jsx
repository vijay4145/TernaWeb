import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getEventOverviewList } from '../../http';
import { EventCard } from './EventCard';
import EventCardSkeleton from './EventCardSkeleton';

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
        {isLoading === true && <div id="EventCardSkeleton" className="z-10 flex flex-wrap gap-4 grid-cols-3 overflow-scroll  scrollbar-hide ">
            <EventCardSkeleton/>
            <EventCardSkeleton/>
            <EventCardSkeleton/>
            <EventCardSkeleton/>
            <EventCardSkeleton/>
            <EventCardSkeleton/>

        </div>}

        {isLoading === false && <div id="EventList" className="z-10 flex flex-wrap gap-4 grid-cols-3 overflow-scroll  scrollbar-hide ">
            {eventsList && eventsList.length > 0 && eventsList.map((eve, i) => {
              return <EventCard event={eve} keys={i} key={i}/> ;
            })}

        </div>}
    </>
  )
}
