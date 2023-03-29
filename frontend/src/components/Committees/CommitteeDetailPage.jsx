import { getCommitteeUsingId } from '../../http';
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoLocation } from 'react-icons/go'

export const CommitteeDetailPage = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    useEffect(() => {
        const id = location.pathname.split('/').at(-1);
        getCommitteeUsingId(id).then(res=>{
            console.log(res);
            setData(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    

  return (
    <>
          {data && data !== null && (
        <div className="flex flex-col gap-2">
          <section id="top-heading" className="p-4 bg-gray-50 w-full">
            <div className="pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm">
              <span className="text-blue-600"> Committee {" > "} </span>{" "}
              {data.COMMITTEE_NAME}
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
                  src={data.COMMITTEE_IMAGE_URL}
                  alt="Event_icon" 
                />
                <div
                  id="data"
                  className="flex flex-col gap-2  md:items-start"
                >
                  <h1 className="text-3xl font-serif">{data.COMMITTEE_NAME}</h1>
                  <div className="flex gap-2 items-center">
                    <GoLocation />
                    <p>Terna Engineering College</p>
                  </div>
                  <a href={data.COMMITTEE_REGISTER_LINK} target="_blank">
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
                  <p>{data.COMMITTEE_DESCRIPTION}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl">&nbsp;Tags</h4>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {data.COMMITTEE_TAGS &&
                      data.COMMITTEE_TAGS.length > 0 &&
                      data.COMMITTEE_TAGS.map((tag, i) => {
                        return (
                          <p className="py-1 px-3 bg-gray-200  max-w-fit rounded-lg">
                            {tag}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>

<h1>To be completed: committe admin</h1>

              <br/>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
