import { useEffect, useState } from "react";
import PlayIcon from "./PlayIcon";
import ClearIcon from "./ClearIcon";
import Modal from "./Modal";

const ShowTimeWraper = ({
  children,
  setRunning,
  runnig,
  handelReset,
  isBreakTime,
  isClose,
  setIsClose,
}) => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);

    const timer = setTimeout(() => {
      setFlash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isBreakTime]);

  return (
    <div
      onClick={(e) => {
        setIsClose((prevState) => !prevState);
      }}
      className="group flex flex-col items-center gap-[4vw] rounded-2xl px-8 pt-8 pb-18 ease-out hover:bg-zen-950 md:gap-[0vw] md:rounded-4xl"
    >
      <p
        className={`text-[1.5vh] tracking-normal normal-case transition-all md:text-[1.5vw] ${flash ? " text-zen-400 opacity-100 duration-200 " : "opacity-0 duration-200 group-hover:opacity-100 hover:group-hover:opacity-100"}`}
      >
        {isBreakTime ? "Break time" : "work time"}
      </p>
      <div className="flex pr-3 md:pr-5">{children}</div>
      <div className="flex h-[7vh] w-[7vh] cursor-pointer flex-col items-center text-base tracking-normal normal-case opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:group-hover:opacity-100 max-md:opacity-100 md:h-[5vw] md:w-[5vw] lg:h-[4vw] lg:w-[4vw]">
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
