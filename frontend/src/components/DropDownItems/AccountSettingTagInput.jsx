import React from "react";
import { useState } from "react";
import { BsHash } from "react-icons/bs";

export const AccountSettingTagInput = (props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tag, setTag] = useState("");
  const addTag = (e) => {
    e.preventDefault();
    if (tag) props.setLinks([...props.links, tag]);
    setTag("");

  };

  const validateUrl = () => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (tag.length > 0 && !urlPattern.test(tag)) {
      return false;
    }
    return true;
  };

  return (
    <>
    <div>

      <div className="relative" >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsHash />
        </div>
        <input
          type="url"
          id="default-search"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && isInputFocused) {
              addTag(e);
            }
          }}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g: Github link"
        />
        <button
          type="button"
          onClick={addTag}
          disabled={props.isLoading}
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add tags
        </button>
      </div>

      <section
        id="warning"
        className={`ml-2 ${isInputFocused ? "block" : "hidden"}`}
        >
        <p className="text-red-600">
          {validateUrl() ? "" : "*Enter a valid url"}
        </p>
      </section>
    </div>
    </>
  );
};
