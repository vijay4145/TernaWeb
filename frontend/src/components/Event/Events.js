import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventCard } from "./EventCard";
import { addEventSlice } from "../../store/EventSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";
import { AddEvent } from "./AddEvent";
import { getEventDetails } from '../../http/index';

export const Events = (props) => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.EventSlice);
  const [formVisible, setFormVisible] = useState(false);
  const [eventsList, setEventsList] = useState([]);

  const toggleFormVisibility = ()=>{
    if(formVisible) setFormVisible(false);
    else setFormVisible(true);
  }

  useEffect(() => {
    getEventDetails().then((response)=>{
      setEventsList(response.data)
      console.log(response.data);
    })
    props.setProgress(100);
  }, []);

  AOS.init();

  return (
    <>
    
      {formVisible && <AddEvent toggleFormVisibility={toggleFormVisibility}/>}
      <div className="floating-Add-Button fixed bottom-4 right-5 z-10">
      <button type="button" className= "rounded-full hover:bg-blue-900 text-6xl bg-blue-600" onClick={toggleFormVisibility}>
        {!formVisible && <AiOutlinePlusCircle color="#ffffff"/>}
        {formVisible && <AiFillCloseCircle color="#ffffff"/>}
      </button>
      </div>
    {!formVisible && <section id="eventListSection">

      <section id="upcomingEvents" className="mt-3 mx-4">
        <h1 className="text-blue-900 font-semibold text-3xl">
          Upcoming Events :
        </h1>
        {eventsList.map((eve, i) => {
          return <EventCard event={eve} keys={i} key={i}/>;
        })}
      </section>

      <br />
      <br />
      <br />
      {/* <section id='pastEvents' className='mt-3 mx-4'>
        <h1 className='text-blue-900 font-semibold text-3xl'>Past Events :</h1>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </section> */}

      <br />
      <br />
    </section>}
    </>
  );
};
