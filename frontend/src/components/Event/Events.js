import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventCard } from "./EventCard";
import { addEventSlice } from "../../store/EventSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";
import { AddEvent } from "./AddEvent";

export const Events = (props) => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.EventSlice);
  const [formVisible, setFormVisible] = useState(false);
  let addEventForm;
  if(formVisible) addEventForm = <AddEvent/>

  const toggleFormVisibility = ()=>{
    if(formVisible) setFormVisible(false);
    else setFormVisible(true);
  }

  useEffect(() => {
    // addEventSlice.
    dispatch(
      addEventSlice({
        EVENT_HEADING: "rgegeruiy",
        EVENT_SCHEDULE: "ggre",
        EVENT_TAGS: [],
        EVENT_REGISTER_LINK: "gdfg",
        EVENT_DESCRIPTION: "vdfgd",
        EVENT_IMAGE_URL: "yuhu",
        EVENT_POSTED_BY: "uihihi",
      })
    );
    props.setProgress(100);
  }, []);

  AOS.init();

  return (
    <>
    
    {addEventForm}
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
        {event.map((eve, i) => {
          return <EventCard keys={i} key={i}/>;
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
