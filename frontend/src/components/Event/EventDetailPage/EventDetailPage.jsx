import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getEventDetailsUsingId } from "../../../http";
import { AiOutlineClockCircle, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import { GoLocation } from 'react-icons/go'

export const EventDetailPage = () => {
  const default_img_url =
    "https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg?size=626&ext=jpg&ga=GA1.2.393029470.1679581827&semt=ais";
    const default_profile_pic_url =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";
  const location = useLocation();
  const [data, setData] = useState(null);
  useEffect(() => {
    const pathname = location.pathname;
    getEventDetailsUsingId(
      pathname.split("/").at(-1)
    ).then((res) => {
      setData(res.data);
    }).catch(err=>{
      console.log(err);
    });
  }, []);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if(data && data !== null){
    const targetDateTime = data.EVENT_REGISTER_BEFORE;
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const targetTime = new Date(targetDateTime).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } 
      else {
        clearInterval(intervalId);
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }
  }, [data]);


  const sendLinkToSocialMedia = ()=>{
    const message = window.location.href;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {data && data !== null && (
        <div className="break-all flex flex-col gap-2">
          <section id="top-heading" className="p-4 bg-gray-50 w-full">
            <div className="pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm">
              <span className="text-blue-600"> Events {" > "} </span>{" "}
              {data.EVENT_HEADING}
            </div>
          </section>
          <div className="flex items-center justify-center">
            <section
              id="Event-Details"
              className="flex flex-col  min-w-[50vw] max-w-4xl gap-4"
            >
              <div className="w-full flex flex-col justify-between md:flex-row-reverse gap-5 md:gap-12 bg-blue-400 shadow-lg p-5 rounded-xl text-white items-center">
                <img
                  className="w-80 border-spacing-1 h-auto rounded-xl shadow-lg"
                  style={{ border: "1px solid wheat" }}
                  src={data.EVENT_IMAGE_URL || default_img_url}
                  alt="Event_icon" 
                />
                <div
                  id="data"
                  className="flex flex-col gap-2  md:items-start"
                >
                  <h1 className="text-3xl font-serif">{data.EVENT_HEADING}</h1>
                  <div className="flex gap-2 items-center">
                    <GoLocation />
                    <p>{data.EVENT_VENUE}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle />
                    {timeLeft.days ?
                    <p>{`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds left`}</p>
                    :
                    <p>Registration Finished</p>
                    }
                  </div>
                  <a href={data.EVENT_REGISTER_LINK} target="_blank">
                    <button className="mt-3 bg-white md:max-w-fit hover:bg-blue-500 shadow-lg text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                      Apply Now
                    </button>
                  </a>
                </div>
              </div>

              <div
                id="description-tag"
                className="flex flex-col md:flex-row mt-2 p-2 w-full gap-4"
              >
                <div className="flex flex-col col-span-2 md:w-[70%]">
                  <h5 className="text-lg font-semibold">Description :</h5>
                  <p>{data.EVENT_DESCRIPTION}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl">&nbsp;Tags</h4>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {data.EVENT_TAGS &&
                      data.EVENT_TAGS.length > 0 &&
                      data.EVENT_TAGS.map((tag, i) => {
                        return (
                          <p className="py-1 px-3 bg-gray-200  max-w-fit rounded-lg">
                            {tag}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div id="posted-by" className="ml-2">
              <h5 className="font-semibold text-lg">Event Posted By</h5>
                <div className="flex items-center flex-wrap">
                  <img src={default_profile_pic_url} alt="" className="h-9 bg-slate-50 rounded-full shadow-lg" />
                  <Link to={data.EVENT_POSTED_BY.split('@')[0]} target='_blank' className="underline text-lg hover:text-blue-500 cursor-pointer">{data.EVENT_POSTED_BY}</Link>
                </div>
              </div>


              <div id="share-button" className="flex flex-col gap-1 ml-2">
                <h5 className="font-semibold text-lg">Contact Us on :</h5>
                <div className="flex flex-row gap-4 flex-wrap">
                  {data.MAIL_LINK && <a href={data.MAIL_LINK} target="_blank"><AiOutlineMail color="#c71610" size={30}/></a>}
                  {data.DISCORD_LINK && <a href={data.DISCORD_LINK} target="_blank"><BsDiscord color="#3b5998" size={30}/></a>}
                  {data.LINKEDIN_LINK && <a href={data.LINKEDIN_LINK} target="_blank"><AiFillLinkedin color="#0072b1" size={30}/></a>}
                  {data.WEBSITE_LINK && <a href={data.WEBSITE_LINK} target="_blank"><TbWorld color="#0072b1" size={30}/></a>}
                </div>
              </div>
              <br/>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
