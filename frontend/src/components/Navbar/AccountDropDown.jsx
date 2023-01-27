import React from "react";
import userIcon from '../../lottie_animation/user_icon.png';
import accountSettingsIcon from '../../lottie_animation/account-settings.png';
import "../../css/Navbar/AccountDropDown.css";
import userIcon2 from "../../lottie_animation/user_icon2.png";
import logoutIcon from "../../lottie_animation/logout.png";


export const AccountDropDown = () => {
  const dropdownClick = (e)=>{
    console.log(e);
  }


  return (
    <>
        <div className="account-drop-down cursor-pointer">
            <img src={userIcon} className="account-icon h-10"/>
            <ul className="dropdown-items absolute z-10 right-[20px] bg-white">
                <li onClick={()=>{dropdownClick('profile')}} className="dropdown-subitems p-4 flex flex-row">
                  <img src={userIcon2} className="h-6"/>
                  <h3>&nbsp;My Profile</h3>
                </li>       <hr/>
                <li onClick={()=>{dropdownClick('account-settings')}} className="dropdown-subitems p-4 flex flex-row ">
                    <img src={accountSettingsIcon} className="h-6"/>
                    <h3>&nbsp;Account Settings</h3>
                </li> <hr/>
                <li  onClick={()=>{dropdownClick('log-out')}}  className="dropdown-subitems p-4 flex flex-row">
                  <img src={logoutIcon} className="h-6"/>
                  <h3>&nbsp;Log out</h3>
                </li>       <hr/>
            </ul>
        </div>

    </>
  );
};
