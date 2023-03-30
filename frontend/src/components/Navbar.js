import React, { useState } from "react";
import university_icon_white from "../lottie_animation/university_icon_dark_mode.png";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../config/firebase-config";
import { AiFillHome, AiFillNotification } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = (props) => {
  // home, event, committee, past year paper
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState([true, false, false, false]);
  const location = useLocation();


  useEffect(() => {
    let path = location.pathname.split("/")[1];
    let newItem = [false, false, false, false];

    if (path === "events") newItem[1] = true;
    else if (path === "") newItem[0] = true;
    else if (path === "committees") newItem[2] = true;
    else if (path === "pastYearPapers") newItem[3] = true;
    setSelectedItem(newItem);
  }, [location]);

  return (
    <>
      <div className="flex flex-col gap-1 sticky top-0">
        <div className="flex flex-row items-center justify-between  w-full pr-3">
          <div
            name="title"
            className="flex content-center items-center m-1 gap-2"
          >
            <img className="h-8 w-auto " src={university_icon_white} alt="" />
            <div className="flex flex-col">
              <h1 className="flex content-center items-center text-white text-3xl">
                𝑻𝒆𝒓𝒏𝒂
              </h1>
              <h6 className="text-xs text-white">Terna For Students</h6>
            </div>
          </div>

          <div>
            <GiHamburgerMenu
              color="white"
              className="h-10 w-10 md:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
        <ul
          className={`flex w-full flex-col content-center overflow-hidden text-xl px-2 md:h-full
           ${isExpanded ? "ulist-item-expanded" : "ulist-items"}
           md:gap-8
          `}
        >
          <div className="flex gap-2 items-center pt-5 md:pt-8 ulist-subitem">
            <div
              className={`bg-white font-medium rounded-sm ${
                selectedItem[0] ? "bg-white" : "hidden"
              }`}
            >
              &nbsp;
            </div>
            <AiFillHome color={`${selectedItem[0] ? "white" : "#CBD5E1"}`} />
            <Link
              className={`nav ${
                selectedItem[0] ? "text-white" : "text-slate-300"
              }`}
              to="/"
            >
              Home
            </Link>
          </div>

          <div className="flex gap-2 items-center ulist-subitem max-md:pt-3">
            <div
              className={` bg-white font-medium rounded-sm ${
                selectedItem[1] ? "bg-white" : "hidden"
              }`}
            >
              &nbsp;
            </div>
            <AiFillNotification
              color={`${selectedItem[1] ? "white" : "#CBD5E1"}`}
            />
            <Link
              className={`nav ${
                selectedItem[1] ? "text-white" : "text-slate-300"
              }`}
              to="/events"
            >
              Events
            </Link>
          </div>

          <div className="flex gap-2 items-center ulist-subitem max-md:pt-3">
            <div
              className={`bg-white font-medium rounded-sm ${
                selectedItem[2] ? "bg-white" : "hidden"
              }`}
            >
              &nbsp;
            </div>
            <HiUserGroup color={`${selectedItem[2] ? "white" : "#CBD5E1"}`} />
            <Link
              className={`nav ${
                selectedItem[2] ? "text-white" : "text-slate-300"
              }`}
              to="/committees"
            >
              Committees
            </Link>
          </div>

          <div className="flex gap-2 items-center ulist-subitem max-md:pt-3">
            <div
              className={`bg-white font-medium rounded-sm ${
                selectedItem[3] ? "bg-white" : "hidden"
              }`}
            >
              &nbsp;
            </div>
            <ImBooks color={`${selectedItem[3] ? "white" : "#CBD5E1"}`} />
            <Link
              className={`nav ${
                selectedItem[3] ? "text-white" : "text-slate-300"
              }`}
              to="/pastYearPapers"
            >
              Resources
            </Link>
          </div>
        </ul>
        {/* <div className='flex flex-row justify-between content-center items-center gap-x-20 z-10'>
            {
              (currentUser !== null) ? (<AccountDropDown/>)
              :
              <button onClick={props.signInWithGoogle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-2'>Login</button>
            }
            </div> */}
      </div>
    </>
  );
};
