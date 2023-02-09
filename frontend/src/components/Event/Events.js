import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EventCard } from "./EventCard";
import { addEventSlice } from "../../store/EventSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle } from 'react-icons/ai'

export const Events = (props) => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.EventSlice);

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
      <div className="floating-Add-Button fixed bottom-4 right-5 z-10">
        <button type="button" className= "rounded-full hover:bg-blue-700 text-6xl bg-blue-600">
          <AiOutlinePlusCircle color="#ffffff"/>
        </button>
      </div>
      <section id="upcomingEvents" className="mt-3 mx-4">
        <h1 className="text-blue-900 font-semibold text-3xl">
          Upcoming Events :
        </h1>
        {event.map((eve, i) => {
          return <EventCard keys={i} />;
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
    </>
  );
};
