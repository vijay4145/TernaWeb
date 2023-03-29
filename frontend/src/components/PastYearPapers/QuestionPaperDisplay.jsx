import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import google_drive_icon from '../../lottie_animation/google_drive.png';
import book_icon from '../../lottie_animation/student.png';

export const QuestionPaperDisplay = () => {
  const location = useLocation();

  const generatePYPLink = ()=>{
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    if(url_branch && url_branch !== '-' && url_semester && url_semester !== '-'){
      if(url_semester === '1' || url_semester === '2' )
        return 'https://muquestionpapers.com/be/first-year-engineering/semester-' + url_semester
      else 
       return 'https://muquestionpapers.com/be/' + url_branch + '/semester-' + url_semester;
      }
    return '#';
  }

  const generateResourceLink = ()=>{
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    if(Resources[url_branch] && Resources[url_branch][url_semester])
      return Resources[url_branch][url_semester];
    return 'https://drive.google.com/drive/folders/1Bitfm_kBwes3N9UrWUzinJMoFLZH2Tjx';
  }

  return (
    <>
      <section className="flex gap-6 m-2 flex-wrap max-sm:flex-col items-center">
          <a target='_blank' href={generatePYPLink()}>
        <div className="flex flex-col bg-blue-50 p-3 max-w-fit rounded-xl items-center shadow-lg">
          <img src={google_drive_icon} className="h-40 w-auto bg-white rounded-xl" alt="" />
          <h2 className="text-xl text-center">Past Year  Question <br/> Paper</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-1 mt-1">Open</button>
        </div>
          </a>
        
          <a href={generateResourceLink()} target="_blank">
        <div className="flex flex-col bg-blue-50 p-3 rounded-xl items-center shadow-lg">
          <img src={book_icon} className="h-40 w-auto bg-white rounded-xl" alt="" />
            <h2 className="text-xl text-center">Books and<br/> Resources</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-1 mt-1">Open</button>
          </div>
          </a>
      </section>
    </>
  );
};


const Resources = {
  'computer-engineering':{
    '5':'https://drive.google.com/drive/folders/1gKm4FeTlmMegdseiysYPTh16xVsI_1Zm',
    '6':'https://drive.google.com/drive/folders/1Joh4VqI0ZScdFuhAkZ9i62oceBb0nAHy'
  }
}