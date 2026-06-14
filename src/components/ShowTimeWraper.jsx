import React from "react";
import ShowTime from "./ShowTime";
import PlayIcon from "./PlayIcon";
import ClearIcon from "./ClearIcon";

const ShowTimeWraper = ({ children, setRunning, runnig, handelReset }) => {
  return (
    <div className="group relative flex flex-col items-center gap-[4vw] rounded-2xl px-8 pt-8 pb-18 hover:bg-zen-950 md:gap-[2vw] md:rounded-4xl">
      <div className="flex">{children}</div>

      <div className="
      flex h-[7vh] w-[7vh] cursor-pointer flex-col items-center text-base tracking-normal normal-case opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:group-hover:opacity-100 max-md:opacity-100 md:h-[5vw] md:w-[5vw] lg:h-[4vw] lg:w-[4vw]">
        {runnig ? (
          <ClearIcon
            className="text-zen-800"
            setRunning={setRunning}
            handelReset={handelReset}
          />
        ) : (
          <PlayIcon className="text-zen-400" setRunning={setRunning} />
        )}
      </div>
    </div>
  );
};

export default ShowTimeWraper;
