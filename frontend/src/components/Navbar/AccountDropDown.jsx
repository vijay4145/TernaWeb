import React from "react";
import userIcon from '../../lottie_animation/user_icon.png';
import accountSettingsIcon from '../../lottie_animation/account-settings.png';
import "../../css/Navbar/AccountDropDown.css";
import userIcon2 from "../../lottie_animation/user_icon2.png";
import logoutIcon from "../../lottie_animation/logout.png";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";





export const AccountDropDown = () => {
  const logout = ()=>{
    getAuth().signOut();
  }


  return (
    <>
        <div className="account-drop-down cursor-pointer">
            <img src={userIcon} className="account-icon h-10"/>
            <ul className="dropdown-items absolute z-10 right-[20px] bg-white">
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
