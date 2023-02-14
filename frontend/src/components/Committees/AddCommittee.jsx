import React, { useEffect, useState } from "react";
import { AddTagInput } from "../Event/AddTagInput";
import { HastTagCards } from "../Event/HastTagCards";
import { MdHttp } from "react-icons/md";
import { BiHeading } from "react-icons/bi";
import { postCommittee } from "../../http/index";
import * as loading_animation from "../../lottie_animation/loading_animation.json";
import * as success_animation from "../../lottie_animation/success_animation.json";
import * as failed_animation from "../../lottie_animation/failed_task.json";
import Lottie from "lottie-react";
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../config/firebase-config'

export const AddCommittee = (props) => {
  const [hashTags, setHashTags] = useState([]);
  const [committeeName, setCommitteeName] = useState("")
  const [committeeRegistrationLink, setcommitteeRegistrationLink] = useState('')
  const [committeeDescription, setcommitteeDescription] = useState('')
  const [isLoading, setisLoading] = useState(false);
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] =
    useState(false);
  const [isFormSubmissionFailed, setIsFormSubmissionFailed] = useState(false);
  const [image, setImage] = useState(null);
  const [imagUrlstate, setImagUrlstate] = useState('');


  const addEvent = async (e) => {
    if (hashTags.length === 0) {
      e.preventDefault();
      alert("Please Add Your Tag");
      return false;
    }

    setisLoading(true);
    var imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tBnVQ1j0IsjK4pxGmLtGTkLIwvZTeT-Xf1EAxFgVWA&s';
    if(image){
      const storageRef = ref(storage, `committeeImages/${image.name}`);
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
              COMMITTEE_NAME : committeeName,
              COMMITTEE_REGISTER_LINK: committeeRegistrationLink,
              COMMITTEE_TAGS: hashTags,
              COMMITTEE_DESCRIPTION: committeeDescription,
              COMMITTEE_IMAGE_URL: imageUrl,
              COMMITTEE_ADMINS: "vijay-temporary-h",
            };
        
            postCommittee(eventDetailJson).then((response) => {
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

  const hideSubmissionResult = () => {
    if (isFormSubmissionFailed) {
      setIsFormSubmissionFailed(false);
    } else {
      setIsFormSubmittedSuccessfully(false);
      props.toggleFormVisibility();
    }
  };
  return (
    <>
      <section
        id="LoadingAnimation"
        className={` min-w-[98vw] min-h-[80vh] flex justify-center absolute z-10 ${
          isLoading || isFormSubmittedSuccessfully || isFormSubmissionFailed
            ? "block"
            : "hidden"
        }`}
      >
        <div
          className={`max-w-sm max-h-fit flex mx-auto flex-col rounded-3xl justify-center shadow-2xl bg-slate-50`}
        >
          {isLoading && <Lottie animationData={loading_animation}></Lottie>}
          {isFormSubmittedSuccessfully && (
            <Lottie animationData={success_animation}></Lottie>
          )}
          {isFormSubmissionFailed && (
            <Lottie animationData={failed_animation}></Lottie>
          )}

          <button
            className={`text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto ${
              isLoading ? "hidden" : "block"
            }`}
            onClick={hideSubmissionResult}
          >
            Okay
          </button>
          <h2
            className={`text-3xl text-blue-700 font-bold py-2 px-4 rounded mx-auto ${
              isLoading ? "block" : "hidden"
            }`}
          >
            Loading...
          </h2>
        </div>
      </section>
      <section id="addEvent" className={`px-3 ${isLoading ? "blur-sm" : ""}`}>
        <div className="flex min-h-[80vh] items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium">Add Committee</h1>
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
                      setCommitteeName(e.target.value);
                    }}
                    disabled={isLoading}
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ml-10">
                    Committee Name
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
                      setcommitteeRegistrationLink(e.target.value);
                    }}
                    required
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
                      disabled={isLoading}
                      onChange={(e)=>{setImage(e.target.files[0])}}
                      required
                    />
                  </div>

                  <AddTagInput
                    setHashTags={setHashTags}
                    hashTags={hashTags}
                    isLoading={isLoading}
                  />
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
                    onChange={(e) => {
                      setcommitteeDescription(e.target.value);
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
                  Add Committee
                </button>
                <button
                  type="submit"
                  className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
                  disabled={isLoading}
                >
                  Save As Draft
                </button>
              </div>
            </form>
          </div>
        </div>
        <br/>
        <br/>
      </section>



    </>
  );
};
