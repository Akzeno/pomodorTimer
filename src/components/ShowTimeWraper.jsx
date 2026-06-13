import React from "react";
import ShowTime from "./ShowTime";

const ShowTimeWraper = ({ children }) => {
  return (
    <div className="flex items-center gap-[2vw] px-8 hover:bg-zen-950 relative ">
      {children}
    </div>
  );
};

export default ShowTimeWraper;
