import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getEventDetailsUsingId } from "../../../http";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from 'react-icons/bs'

export const EventDetailPage = () => {
  const default_img_url =
    "https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg?size=626&ext=jpg&ga=GA1.2.393029470.1679581827&semt=ais";
  const location = useLocation();
  const [data, setData] = useState(null);
  useEffect(() => {
    const pathname = location.pathname;
    getEventDetailsUsingId(
      "",
      pathname.split("/")[2],
      pathname.split("/")[3]
    ).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      {data && data !== null && (
        <div className="flex flex-col gap-2">
          <section id="top-heading" className="p-4 bg-gray-50 w-full">
            <div className="pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm">
              <span className="text-blue-600"> Events {" > "} </span>{" "}
              {data.EVENT_HEADING}
            </div>
          </section>
          <div className="flex items-center justify-center">
            <section
              id="Event-Details"
              className="flex flex-col  min-w-[50vw] max-w-xl gap-4"
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
                  className="flex flex-col gap-2 items-center md:items-start"
                >
                  <h1 className="text-3xl font-serif">{data.EVENT_HEADING}</h1>
                  <div className="flex gap-2 items-center">
                    <GoLocation />
                    <p>{data.EVENT_VENUE}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle />
                    <p>{data.EVENT_VENUE} left</p>
                  </div>
                  <button className="mt-3 bg-white md:max-w-fit hover:bg-blue-500 shadow-lg text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                    Apply Now
                  </button>
                </div>
              </div>

              <div
                id="description-tag"
                className="flex flex-col md:flex-row mt-2 p-2 w-full gap-4"
              >
                <div className="flex flex-col col-span-2 md:w-[70%]">
                  <h5 className="text-lg font-semibold">Description :</h5>
                  <p>{data.EVENT_DESCRIPTION} Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur fugit, error iste aliquid nesciunt ex aperiam voluptatem dolor, ea hic. Expedita odio vero corporis ipsam dignissimos autem, saepe quaerat facere dolorum sunt voluptatum mollitia dolores officia rem repellat quod neque! Eveniet saepe distinctio fugit ipsum ad? Dolorum corporis maxime distinctio nisi dolore recusandae praesentium blanditiis atque, numquam molestias nulla ipsam est optio, deleniti repudiandae dicta autem ut placeat voluptate aut quia accusamus totam. Maiores dolorem corporis libero. Eum, id? Hic, eum vero. Voluptates itaque possimus vel ex architecto. Dolore voluptates soluta repellat dolor tempora assumenda quasi atque odit consectetur.</p>
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

              <div id="registered-user-list" className="flex ml-2">
                <div class="flex -space-x-4 items-center">
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href="#"
                  >
                    +99
                  </a>
                  Registered Users
                </div>
              </div>


              <div id="share-button" className="flex flex-col gap-1 ml-2">
                <h5 className="font-semibold text-lg">Share With Your Freinds</h5>
                <div className="flex flex-row gap-4 flex-wrap">
                  <BsWhatsapp color="#00FF00" size={30}/>
                  <AiFillFacebook color="#3b5998" size={30}/>
                  <AiFillLinkedin color="#0072b1" size={30}/>
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
