import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import google_drive_icon from '../../lottie_animation/google_drive.png';
import book_icon from '../../lottie_animation/student.png';
import gcr_icon from '../../lottie_animation/google_classroom_icon.png';
import computer_icon from '../../lottie_animation/computer.png';

export const QuestionPaperDisplay = () => {
  const location = useLocation();
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const url_branch = searchParams.get('branch');
    const url_semester = searchParams.get('semester');
    setBranch(url_branch); setSemester(url_semester);    
  }, [])
  

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();

    // // Create the URL with the parameters
    console.log(window.location.href);
    const url = `${window.location.href}&${searchParams.toString()}gcr=true`;

    window.location.href = url;
  };

  const handleSubmitExperiment = (event) =>{
    event.preventDefault();
    const searchParams = new URLSearchParams();

    // // Create the URL with the parameters
    console.log(window.location.href);
    const url = `${window.location.href}&${searchParams.toString()}experiment=true`;

    window.location.href = url;
  }

  return (
    <>

      <section className="flex gap-6 m-2 flex-wrap max-sm:flex-col items-center">
          <form onSubmit={handleSubmitExperiment} className="flex flex-col bg-blue-50 p-3 rounded-xl items-center shadow-lg">
          <img src={computer_icon} className="h-40 w-auto bg-white rounded-xl" alt="" />
            <h2 className="text-xl text-center">Download <br/> Experiments</h2>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-1 mt-1">Open</button>
          </form>

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

          <form onSubmit={handleSubmit} className="flex flex-col bg-blue-50 p-3 rounded-xl items-center shadow-lg">
          <img src={gcr_icon} className="h-40 w-auto bg-white rounded-xl" alt="" />
            <h2 className="text-xl text-center">Google Classroom <br/> Links</h2>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded drop-shadow-sm px-3 py-1 mt-1">Open</button>
          </form>
          
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