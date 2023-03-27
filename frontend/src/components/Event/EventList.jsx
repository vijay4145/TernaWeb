import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getEventDetails, getEventOverviewList } from '../../http';
import { CommitteesList } from '../Committees/CommitteesList';
import { EventCard } from './EventCard';

export const EventList = (props) => {
    const [eventsList, setEventsList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        getEventOverviewList(location.pathname.split('/')[2]).then((response)=>{
          setEventsList(response.data)
          props.setProgress(100);
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
