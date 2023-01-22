import React from "react";

export const EventCard = () => {
      const imgUrl = "https://cdn4.vectorstock.com/i/1000x1000/69/03/flat-icon-sport-events-vector-9456903.jpg";
  return (
    <>
      <br />
      <div
        data-aos="fade-right"
        className="upcomingEventCard mx-3 flex flex-col md:flex-row gap-6 content-center justify-center bg-white px-3"
        style={{
          border: "1px solid #ddd",
          boxShadow: "0 10px 50px -30px black",
          borderRadius: "30px",
        }}
      >
        <img
          src={imgUrl}
          alt=""
          className="w-full md:w-[20vw] h-[30vh] object-contain min-h-[150px]"
        />
        <div className="flex flex-col w-full md:w-[70vw] py-4 content-center">
          <h1 className="text-2xl font-semibold text-blue-600">
            Interview for SPORTEC- Core Team
          </h1>
          <p>
            {" "}
            The most Awaited EVENT of Terna Engineering college SPORTEC 2023 is
            here. Students those who all are interested to be a part of our
            sports core committee from Terna Engineering College, Nerul can fill
            this google form for interviews rest of the details will be shared
            soon.
          </p>
          <span className="flex justify-center md:justify-start mt-1">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-3 rounded drop-shadow-sm">
              Explore More
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
