import React, { useEffect } from "react";
import { AiOutlineSchedule } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const EventCard = (props) => {
  
      const imgUrl = "https://cdn4.vectorstock.com/i/1000x1000/69/03/flat-icon-sport-events-vector-9456903.jpg";
  return (
    <>
      <br />
      <Link to={props.event._id}
      target='_blank' 
        className="upcomingEventCard mx-3 flex flex-col md:flex-row gap-6 content-center justify-center bg-white px-3 shadow-lg rounded-3xl hover:shadow-xl"
        style={{
          border: "1px solid #ddd",
        }}
      >
        <img
          src={props.event.EVENT_IMAGE_URL}
          alt=""
          className=" w-fit md:w-[20vw] h-[30vh] object-contain min-h-[150px]"
        />
        <div className="flex flex-col w-full md:w-[70vw] py-4 content-center">
          <h1 className="text-2xl font-semibold text-blue-600">
            {props.event.EVENT_HEADING}
          </h1>
          <p>
            {" "}
            {props.event.EVENT_DESCRIPTION}
          </p>
          <div className="flex mt-1 items-center">
            <AiOutlineSchedule className="min-h-full" color={'#3B82F6'}/>
            <p >&nbsp;{props.event.EVENT_START ? props.event.EVENT_START.split('T')[0]:''}</p>
          </div>
          <span className="flex justify-center md:justify-start mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-3 rounded drop-shadow-sm">
              Explore More
            </button>
          </span>
        </div>
      </Link>
    </>
  );
};
