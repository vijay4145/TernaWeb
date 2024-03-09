import React, { useState } from "react";
import { BsHash } from "react-icons/bs";

export const AddTagInput = (props) => {
  const [tag, setTag] = useState('');
  const addTag = (e)=>{
    e.preventDefault();
    if(tag)
    props.setHashTags([...props.hashTags, tag]);
    setTag('');
  }


  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsHash/>
          </div>
          <input
            type="search"
            id="default-search"
            value={tag}
            onChange={(e)=>{setTag(e.target.value)}}
            onKeyDown={(e)=>{if(e.key === 'Enter') {addTag(e); }}}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-white "
            placeholder="e.g: #Coding"
            disabled={props.isLoading}
          />
          <button type="button"
            onClick={addTag}
            disabled={props.isLoading}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Add tags
          </button>
        </div>
      </div>
    </>
  );
};
