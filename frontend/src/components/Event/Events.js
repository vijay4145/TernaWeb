import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AddEvent } from "./AddEvent";
import { SideNavbar } from "./SideNavbar/SideNavbar";
import '../../css/ScrollbarHide.css'
import { EventTimeLine } from "./EventTimeLine";
import { SideNavbarMobile } from "./SideNavbar/SideNavbarMobile";
import { Route, Routes } from "react-router-dom";
import { EventList } from "./EventList";

export const Events = (props) => {

  AOS.init({
    offset: 20
  });

  return (
    <>
    <section id="eventListSection" className="min-h-[97vh]">

      <section id="Events" className="mt-3 gap-2 mr-4 flex flex-col md:grid md:grid-cols-4">
        <div className=" max-w-fit md:max-w-full md:h-[86vh] md:overflow-scroll scrollbar-hide rounded-lg shadow-sm">
          <span className="hidden md:block"><SideNavbar/></span>
          <span className="md:hidden"><SideNavbarMobile/></span>
        </div>
        <div className="col-span-2">
          <Routes>
            <Route exact path="/add-event" element={<AddEvent/>}/>
            <Route exact path="/all-events" element={<EventList/>}/>
            <Route exact path="/upcoming-events" element={<EventList/>}/>
            <Route exact path="/popular-events" element={<EventList/>}/>
            <Route exact path="/recommended-events" element={<EventList/>}/>
          </Routes>
        </div>
        <div id="UpcomingEventTimeLineChart" className="hidden md:block col-span-1 overflow-scroll h-[86vh] scrollbar-hide">
          <EventTimeLine/>
        </div>

      </section>
    </section>
    </>
  );
};
