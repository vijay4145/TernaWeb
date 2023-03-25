import React, { useEffect, useState } from "react";
import { AddTagInput } from "./AddTagInput";
import { HastTagCards } from "./HastTagCards";
import { MdHttp } from "react-icons/md";
import { BiHeading } from "react-icons/bi";
import * as loading_animation from "../../lottie_animation/loading_animation.json";
import * as success_animation from "../../lottie_animation/success_animation.json";
import * as failed_animation from "../../lottie_animation/failed_task.json";
import Lottie from "lottie-react";
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../config/firebase-config'
import { postEventDetails } from "../../http";
import { GoLocation } from "react-icons/go";
import { AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import { BsDiscord } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

export const AddEvent = (props) => {
  const [hashTags, setHashTags] = useState([]);
  const [eventHeading, setEventHeading] = useState("");
  const [eventRegistrationLink, seteventRegistrationLink] = useState("");
  const [eventRegisterBefore, setEventRegisterBefore] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] = useState(false);
  const [isFormSubmissionFailed, setIsFormSubmissionFailed] = useState(false);
  const [image, setImage] = useState(null);

  // contacts
  const [linkedinLink, setLinkedinLink] = useState(null);
  const [mailLink, setMailLink] = useState(null);
  const [discordLink, setDiscordLink] = useState(null);
  const [websiteLink, setWebsiteLink] = useState(null);




  const addEvent = async (e) => {
    if (hashTags.length === 0) {
      e.preventDefault();
      alert("Please Add Your Tag");
      return false;
    }

    setisLoading(true);
    var imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tBnVQ1j0IsjK4pxGmLtGTkLIwvZTeT-Xf1EAxFgVWA&s';
    if(image){
      const storageRef = ref(storage, `eventImages/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        'state_changed',
        snapshot =>{

        },
        error =>{
          console.log(error);
        },
        ()=> {
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
            imageUrl = url;
            let eventDetailJson = {
              EVENT_HEADING: eventHeading,
              // EVENT_SCHEDULE: eventSchedule,
              EVENT_REGISTER_BEFORE: eventRegisterBefore,
              EVENT_START: eventStart,
              EVENT_END: eventEnd,
              EVENT_TAGS: hashTags,
              EVENT_VENUE: eventVenue,
              EVENT_REGISTER_LINK: eventRegistrationLink,
              EVENT_DESCRIPTION: eventDescription,
              EVENT_IMAGE_URL: imageUrl,
              EVENT_POSTED_BY: "vijay-temporary-h",
            };


            if(linkedinLink !== null && linkedinLink !== '')
              eventDetailJson = {...eventDetailJson, LINKEDIN_LINK: linkedinLink};
            if(mailLink !== null && mailLink !== '')
              eventDetailJson = {...eventDetailJson, MAIL_LINK: mailLink};
            if(discordLink !== null && discordLink !== '')
              eventDetailJson = {...eventDetailJson, DISCORD_LINK: discordLink};
            if(websiteLink !== null && websiteLink !== '')
              eventDetailJson = {...eventDetailJson, WEBSITE_LINK: websiteLink};
            

            console.log(eventDetailJson);
        
            postEventDetails(eventDetailJson).then((response) => {
              setisLoading(false);
              if (response.success) {
                setIsFormSubmittedSuccessfully(response.success);
              } else {
                console.log("fail hua form submission");
                setIsFormSubmissionFailed(true);
              }
            });
          })
        }
      );
    }


    e.preventDefault();
  };

  const hideSubmissionResult = ()=>{
    if(isFormSubmissionFailed){
      setIsFormSubmissionFailed(false);
    }else {
      setIsFormSubmittedSuccessfully(false);
      props.toggleFormVisibility();
    }
  }

  return (
    <>

      <section
        id="LoadingAnimation"
        className={`flex justify-center fixed mx-auto z-10 ${(isLoading || isFormSubmittedSuccessfully || isFormSubmissionFailed) ? 'block':'hidden'}`}
         style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <div className={`max-w-sm max-h-fit flex mx-auto flex-col rounded-3xl justify-center shadow-2xl bg-slate-50`}>
          { isLoading && <Lottie animationData={loading_animation}></Lottie>}
          { isFormSubmittedSuccessfully && <Lottie animationData={success_animation}></Lottie>}
          { isFormSubmissionFailed && <Lottie animationData={failed_animation}></Lottie>}
          
          <button className={`text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto ${isLoading ? 'hidden':'block'}`} onClick={hideSubmissionResult}>Okay</button>
          <h2 className={`text-3xl text-blue-700 font-bold py-2 px-4 rounded mx-auto ${isLoading ? 'block':'hidden'}`}>Loading...</h2>
        </div>
      </section>
      

      <section id="addEvent" className={`w-full px-3 ${isLoading ? 'blur-sm':''}`}>
        <div className="flex min-h-[80vh] items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium">Add Event</h1>
            <p className="mt-3">
              Fill the form to add event or save as draft to fill later.
            </p>

            <form className="mt-10" onSubmit={addEvent}>
              <div className="flex flex-col gap-6 md:grid-cols-1">
                <div className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BiHeading />
                  </div>
                  <input
                    type="text"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setEventHeading(e.target.value);
                    }}
                    disabled={isLoading}
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Heading
                  </label>
                </div>
                <div className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdHttp />
                  </div>
                  <input
                    disabled={isLoading}
                    type="url"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      seteventRegistrationLink(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Registration link
                  </label>
                </div>

                <div id="event-venue" className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <GoLocation />
                  </div>
                  <input
                    disabled={isLoading}
                    type="text"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      setEventVenue(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Venue
                  </label>
                </div>
                
                <div id="event-website-link" className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <TbWorld />
                  </div>
                  <input
                    disabled={isLoading}
                    type="url"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      setWebsiteLink(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Website Link
                  </label>
                </div>

                <div id="event-discord" className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BsDiscord />
                  </div>
                  <input
                    disabled={isLoading}
                    type="url"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      setDiscordLink(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Discord Link
                  </label>
                </div>

                <div id="event-linkedin" className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiFillLinkedin />
                  </div>
                  <input
                    disabled={isLoading}
                    type="url"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      setLinkedinLink(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Linkedin Link
                  </label>
                </div>

                <div id="event-mail" className="relative z-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <GoLocation />
                  </div>
                  <input
                    disabled={isLoading}
                    type="url"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 p-4 pl-10"
                    placeholder=" "
                    onChange={(e) => {
                      setMailLink(e.target.value);
                    }}
                    required
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Event Mail Link
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
                      onChange={(e)=>{setImage(e.target.files[0])}}
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div className="eventRegisterBefore flex flex-wrap gap-2">
                    <h5>Register Before :</h5>
                    <input
                      type="datetime-local"
                      placeholder="dd/mm/yyyy"
                      onChange={(e) => {
                        setEventRegisterBefore(e.target.value);
                      }}
                      className="border rounded-lg px-2"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="eventStart flex flex-wrap gap-2">
                    <h5>Event Start :</h5>
                    <input
                      type="datetime-local"
                      placeholder="dd/mm/yyyy"
                      onChange={(e) => {
                        setEventStart(e.target.value);
                      }}
                      className="border rounded-lg px-2"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="eventEnd flex flex-wrap gap-2">
                    <h5>Event End :</h5>
                    <input
                      type="datetime-local"
                      placeholder="dd/mm/yyyy"
                      onChange={(e) => {
                        setEventEnd(e.target.value);
                      }}
                      className="border rounded-lg px-2"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <AddTagInput setHashTags={setHashTags} hashTags={hashTags} isLoading={isLoading}/>
                  <div className="flex gap-1 flex-wrap">
                    {hashTags.map((hashTag, i) => {
                      return (
                        <HastTagCards
                          hashTags={hashTags}
                          hashTag={hashTag}
                          key={i}
                          keys={i}
                          setHashTags={setHashTags}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setEventDescription(e.target.value);
                    }}
                    disabled={isLoading}
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Event Description
                  </label>
                </div>
              </div>
              <div className="flex justify-between md:justify-start md:gap-6 flex-wrap">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
                >
                  Add Event
                </button>
                {/* <button
                  type="submit"
                  className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
                  disabled={isLoading}
                >
                  Save As Draft
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};
