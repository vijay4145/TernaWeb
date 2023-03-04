import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import * as loading_animation from "../../lottie_animation/loading_animation.json";
import * as success_animation from "../../lottie_animation/success_animation.json";
import * as failed_animation from "../../lottie_animation/failed_task.json";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import { AccountSettingTagInput } from "./AccountSettingTagInput";
import { AccountLinkDisplay } from "./AccountLinkDisplay";
import { postUser } from "../../http";
import { setUserDetailsSlice } from "../../store/UserDetailsSlice";
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../config/firebase-config'


export const Account_settings = () => {
  const dispatch = useDispatch();
  const optionsYears = [
    "-",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
  ];
  const optionsBranch = [
    "-",
    "Computer Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Electrical Engineering3",
    "Electrical Engineerin2g",
    "Electrical Engineering1",
    "Mechatronics",
  ];
  const default_profile_pic_url =
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp";
  const [fileName, setFileName] = useState(default_profile_pic_url);

  let { USER_NAME, USER_EMAIL, BRANCH, CURRENT_YEAR, LINKS } = useSelector(
    (state) => state.UserDetailsSlice
  );
  const [userNamestate, setUserNamestate] = useState(USER_NAME);
  const [branchState, setBranchState] = useState(BRANCH);
  const [current_year_state, setCurrent_year_state] = useState(CURRENT_YEAR);
  const [links, setLinks] = useState(LINKS);
  const [isLoading, setisLoading] = useState(false);
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] =
    useState(false);
  const [isFormSubmissionFailed, setIsFormSubmissionFailed] = useState(false);
  const [image, setImage] = useState(null);

  const updateDetails = async (e) => {
    setisLoading(true);
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, `userImage/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("profile pic url is " , url);
            let newDetails = {};
            newDetails = {PROFILE_PIC_URL: url};
            if (userNamestate && userNamestate !== "-")
              newDetails = {...newDetails, USER_NAME: userNamestate };
            if (branchState && branchState !== "-")
              newDetails = { ...newDetails, BRANCH: branchState };
            if (current_year_state && current_year_state !== "-")
              newDetails = { ...newDetails, CURRENT_YEAR: current_year_state };
            if (links && links.length > 0 && links[0] !== "-")
              newDetails = { ...newDetails, LINKS: links };
            else newDetails = { ...newDetails, LINKS: [] };
            console.log("detail sended is ", newDetails);
            postUser(newDetails).then((res) => {
              setisLoading(false)
              if (res.success) {
                dispatch(setUserDetailsSlice(newDetails));
                setIsFormSubmittedSuccessfully(true);
              } else {
                setIsFormSubmissionFailed(true);
              }
            });
          });
        }
      );
    } else {
      let newDetails = {};
      if (userNamestate && userNamestate !== "-")
        newDetails = { USER_NAME: userNamestate };
      if (branchState && branchState !== "-")
        newDetails = { ...newDetails, BRANCH: branchState };
      if (current_year_state && current_year_state !== "-")
        newDetails = { ...newDetails, CURRENT_YEAR: current_year_state };
      if (links && links.length > 0 && links[0] !== "-")
        newDetails = { ...newDetails, LINKS: links };
      else newDetails = { ...newDetails, LINKS: [] };
      const res = await postUser(newDetails);
      setisLoading(false);
      if (res.success) {
        dispatch(setUserDetailsSlice(newDetails));
        setIsFormSubmittedSuccessfully(true);
      } else {
        setIsFormSubmissionFailed(true);
      }
    }
    // e.preventDefault();
  };

  const hideSubmissionResult = () => {
    if (isFormSubmissionFailed) {
      setIsFormSubmissionFailed(false);
    } else {
      setIsFormSubmittedSuccessfully(false);
    }
  };

  return (
    <>
      <section
        id="LoadingAnimation"
        className={`min-w-[98vw] min-h-[80vh] flex justify-center absolute z-10 ${
          isLoading || isFormSubmittedSuccessfully || isFormSubmissionFailed
            ? "block"
            : "hidden"
        }`}
      >
        <div
          className={`max-w-sm max-h-fit 'flex' mx-auto flex-col rounded-3xl justify-center shadow-2xl bg-slate-50`}
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

      <section className={`${isLoading ? 'blur-sm':''} flex flex-col justify-center items-center bg-gray-50`}>
        <section id="top-heading" className="p-4 w-full">
          <div className="pt-4 pb-4 px-8 bg-white rounded-xl shadow-sm">
            <span className="text-blue-600">
              <Link to="/">Home /</Link>{" "}
            </span>{" "}
            Account Settings
          </div>
        </section>

        <section className="m-2 max-w-md min-w-[30vw] bg-white p-5 flex flex-col gap-5 rounded-lg shadow-lg">
          <form className="flex gap-6 flex-col" onSubmit={updateDetails}>
            <div className="flex items-center justify-center flex-col gap-2 flex-grow">
              <div className="profile-pic rounded-full overflow-hidden flex justify-center items-center flex-col p-5">
                <img
                  className="profile-image h-32 w-32 object-fill"
                  src={fileName}
                  alt=""
                />
              </div>
              <input
                id="profile-pic"
                type="file"
                onChange={(e) => {
                  setFileName(URL.createObjectURL(e.target.files[0]));
                  setImage(e.target.files[0]);
                }}
                disabled={isLoading}
              />
            </div>

            <div id="username-input" className="">
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">
                  UserName
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  value={userNamestate}
                  onChange={(e) => {
                    setUserNamestate(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <BiUserCircle />
                    </InputAdornment>
                  }
                  label="UserName"
                />
              </FormControl>
            </div>

            <div id="useremail" className="">
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  value={USER_EMAIL}
                  endAdornment={
                    <InputAdornment position="end">
                      <AiOutlineMail />
                    </InputAdornment>
                  }
                  label="Email"
                />
              </FormControl>
            </div>

            <div id="current-year" className="relative z-0">
              <Autocomplete
                fullWidth
                value={current_year_state === null ? "-" : current_year_state}
                onChange={(_, v) => setCurrent_year_state(v)}
                options={optionsYears}
                clearOnEscape
                renderInput={(params) => (
                  <div>
                    <TextField
                      required
                      {...params}
                      label="Current Year"
                      fullWidth
                    />
                  </div>
                )}
              />
            </div>

            <Autocomplete
              id="Branch"
              defaultValue={branchState}
              fullWidth
              value={current_year_state === null ? "-" : branchState}
              onChange={(_, v) => setBranchState(v)}
              options={optionsBranch}
              clearOnEscape
              renderInput={(params) => (
                <div>
                  <TextField required {...params} label="Branch" fullWidth />
                </div>
              )}
            />

            {links && (
              <div className="flex flex-col gap-1">
                {/* <AccountSettingTagInput setLinks={setLinks} links={links}/> */}
                {<AccountSettingTagInput setLinks={setLinks} links={links} />}
                {links.length === 0 && (
                  <h4 className="text-blue-300 text-sm ml-2">No Links added</h4>
                )}
                {links.length > 0 &&
                  links.map((link, i) => {
                    return (
                      <AccountLinkDisplay
                        link={link}
                        key={i}
                        index={i}
                        links={links}
                        setLinks={setLinks}
                      />
                    );
                  })}
              </div>
            )}

            <button
              type="submit"
              className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
            >
              Update
            </button>
          </form>

          <p className="text-green-600 text-sm">
            *Note: branch and year details will help us to provide services that
            are important for you.
          </p>
        </section>

        <br />
        <br />
      </section>
    </>
  );
};
