import React from "react";
import { BranchButton } from "./BranchButton";
import "./sidebar.css";
import { SideBarOption } from "./SideBarForSubjects";

export const Sidebar = () => {
  const branches = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
  ];
  return (
    <>
      <section className="m-2 p-2 text-center flex flex-col gap-7">
        <h1 className="text-2xl font-bold">Select Branch</h1>
        <div className="p-2 flex flex-col gap-4">
          {branches.map((branch, i) => {
            return <BranchButton branch={branch}/>
          })}
        </div>
      </section>
    </>
  );
};
