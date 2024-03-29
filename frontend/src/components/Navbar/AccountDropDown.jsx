import React, { useState } from "react";
import userIcon from '../../lottie_animation/user_icon.png';
import accountSettingsIcon from '../../lottie_animation/account-settings.png';
import "../../css/Navbar/AccountDropDown.css";
import userIcon2 from "../../lottie_animation/user_icon2.png";
import logoutIcon from "../../lottie_animation/logout.png";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";





export const AccountDropDown = ({setCurrentUser}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const logout = ()=>{
    setCurrentUser(false);
    getAuth().signOut();
  }


  return (
    <>
        <div className="account-drop-down cursor-pointer relative">
            <img onClick={()=>setIsExpanded(!isExpanded)} src={userIcon} className="account-icon h-10"/>
            <ul className={`overflow-hidden transition-max-h  absolute z-10 ${isExpanded ? 'max-h-[1000px]':'max-h-0'} right-[20px] bg-white`}>
                <Link to='my-profile' className="dropdown-subitems p-4 flex flex-row">
                  <img src={userIcon2} className="h-6"/>
                  <h3>&nbsp;My Profile</h3>
                </Link>       <hr/>
                <Link to='account-settings' className="dropdown-subitems p-4 flex flex-row ">
                    <img src={accountSettingsIcon} className="h-6"/>
                    <h3>&nbsp;Account Settings</h3>
                </Link> <hr/>
                <li onClick={logout} className="dropdown-subitems p-4 flex flex-row">
                  <img src={logoutIcon} className="h-6"/>
                  <h3>&nbsp;Log out</h3>
                </li>       <hr/>
            </ul>
        </div>

    </>
  );
};
