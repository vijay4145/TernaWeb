import React from "react";

const HalfIconHalfButton = ({buttonIcon, buttonName}) => {
  return (
    <div className="flex gap-2 items-center bg-blue-500 text-base px-0.5 text-white shadow-lg hover:shadow-2xl rounded-sm hover:underline">
      <span className="bg-white min-h-full text-black px-3 py-3">
        {buttonIcon}
      </span>
      <button className="px-2 flex justify-center w-full">{buttonName}</button>
    </div>
  );
};

export default HalfIconHalfButton;
