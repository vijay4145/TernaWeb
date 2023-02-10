import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AddTagInput } from "./AddTagInput";
import  { HastTagCards } from './HastTagCards'
import { BsHash } from "react-icons/bs";
import { MdHttp } from 'react-icons/md';
import { BiHeading } from 'react-icons/bi';


export const AddEvent = () => {
  const [hashTags, setHashTags] = useState([]);
  
  return (
    <>
      <section id="addEvent" className="px-3">
        <div className="flex min-h-[80vh] items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium">Add Event</h1>
            <p className="mt-3">
              Fill the form to add event or save as draft to fill later.
            </p>

            <form className="mt-10">
              <div className="flex flex-col gap-6 md:grid-cols-1">
                <div className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BiHeading/>
                  </div>
                  <input
                    type="text"
                    name="name"
                    
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Heading
                  </label>
                </div>
                <div className="relative z-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdHttp/>
                  </div>
                  <input
                    type="url"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Registration link
                  </label>
                </div>


                <div id="event+date-row" className="flex flex-col gap-3">


                <div className="max-w-2xl">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="file_input"
                    >
                    Upload event Icon
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>

                <div className="eventDate">
                    <input type="date" placeholder="dd/mm/yyyy" className="border rounded-lg px-2" />
                </div>
                  <AddTagInput setHashTags={setHashTags} hashTags={hashTags}/>
                <div className="flex gap-1 flex-wrap">

                    {hashTags.map((hashTag, i)=>{
                      return <HastTagCards hashTags={hashTags} hashTag={hashTag} key={i} keys={i} setHashTags={setHashTags}/>
                    })
                    }     
                  </div>

                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Event Description
                  </label>
                </div>
              </div>
              <div className="flex justify-between md:justify-start md:gap-6 flex-wrap">
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
                >
                  Add Event
                </button>
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
                >
                  Save As Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <br/>
      <br/>
    </>
  );
};
