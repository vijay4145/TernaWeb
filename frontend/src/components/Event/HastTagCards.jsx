import React from "react";
import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const HastTagCards = (props) => {
  const removeTag = (e) => {
    e.preventDefault();
    let newArray = props.hashTags;
    newArray.splice(props.keys, 1);
    props.setHashTags([...newArray]);
  };

  useEffect(() => {
    console.log("forDisplay: " + props.forDisplay);
  }, [])
  

  return (
    <>
      <div className="flex flex-row gap-1 bg-blue-900 text-white max-w-fit px-2 rounded-lg">
        <h1 className="break-all"> #{props.hashTag} </h1>
        <button onClick={removeTag} className={`${props.forDisplay ? 'hidden':'block'}`}>
          <div className={`flex flex-col content-center justify-center`}>
            <AiFillCloseCircle />
          </div>
        </button>
      </div>
    </>
  );
};

HastTagCards.defaultProps = {
  forDisplay: false
}