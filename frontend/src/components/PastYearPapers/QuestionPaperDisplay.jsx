import React, { useEffect, useState } from "react";

export const QuestionPaperDisplay = () => {
  const [currBranch, setCurrBranch] = useState(null);
  const [currSemester, setCurrSemester] = useState(null);
  const [CurrSubjectSelected, setCurrSubjectSelected] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const qp = searchParams.get('questionPaper');
    if(qp !== null){
      setCurrBranch(qp.split('/')[0]);
      setCurrSemester(qp.split('/')[1]); 
      setCurrSubjectSelected(qp.split('/')[2]);
      console.log(qp.split('/')[2]); 
    }
  }, [])

  return (
    <>
      <section className="flex flex-col gap-4 m-2">
        <h1 className="text-sm text-gray-500">
          {" "}
          {currBranch +" > Semester " + currSemester + ' > ' + CurrSubjectSelected}
        </h1>
        {
          questionPaper.map((name, i)=>{
            return (
        <div className="p-6 rounded-2xl flex flex-wrap justify-between bg-slate-50 shadow hover:shadow-md">
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="flex gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg drop-shadow-sm px-2 py-1">
              Question Paper
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg drop-shadow-sm px-2 py-1">
              Answer key
            </button>
          </div>
        </div>

            );
          })
        }

        <p className="text-xs text-red-500">Note: KT papers occurs in June</p>
      </section>
    </>
  );
};


const questionPaper = [
  'May -2020',
  'December -2020',
  'May -2019',
  'December -2019',
  'May -2018',
  'December -2018',
  'May -2017',
  'December -2017',
  'May -2016',
  'December -2016',
  'May -2015',
  'December -2015',
]