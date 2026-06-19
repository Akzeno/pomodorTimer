import React from "react";
import { createPortal } from "react-dom";
import ShowTime from "./ShowTime";
import ShowTimeSetter from "./ShowTimeSetter";

const Modal = ({ isClose, setIsClose }) => {
  return createPortal(
    <div
      onClick={() => {
        setIsClose((prevStae) => !prevStae);
      }}
      className={`absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-[rgb(0,0,0,0.1)] backdrop-blur-sm ${isClose ? "hidden" : ""} `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex px-[500px] py-[200px] items-center justify-center border-2 border-zen-900 rounded-2xl bg-zen-950 md:rounded-4xl"
      >
        <ShowTimeSetter minutsOptionNum={60} />
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Modal;
