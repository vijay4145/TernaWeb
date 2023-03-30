import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../css/ScrollbarHide.css'
import { EventList } from "./EventList";
import { useLocation } from "react-router-dom";
import {AiOutlinePlusSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Events = (props) => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get('filter') ;
    setFilter(filter);
  }, []);

  AOS.init({
    offset: 20
  });

  return (
    <>
    <section data-aos="zoom-in" id="eventListSection" className="min-h-[97vh] flex gap-4 flex-col">
      <form className="flex gap-5 items-center flex-wrap">
        <h5 className="text-lg">Sort By: </h5>
        <button type="submit" name="filter" value='popular_event' className={`p-2 rounded-xl  ${filter === 'popular_event' ? 'bg-gray-400 text-white':'bg-gray-100'}`}>Popular Events</button>
        <button type="submit" name="filter" value='recommended_event'  className={`p-2 rounded-xl ${filter === 'recommended_event' ? 'bg-gray-400 text-white':'bg-gray-100'} `}>Recommended Events</button>
        <button type="submit" name="filter" value='past_event' className={`p-2 rounded-xl  ${filter === 'past_event' ? 'bg-gray-400 text-white':'bg-gray-100'}`}>Past Events</button>
      </form>
      <Link to='add-event' className="bg-blue-400 max-w-fit p-2 rounded-lg text-white flex items-center">
        <AiOutlinePlusSquare className="h-7 w-7"/>
        <p>&nbsp;Add Event</p>
      </Link>
      <EventList/>

    </section>
    </>
  );
};
