import { useEffect, useRef } from "react";
import ShowTime from "./ShowTime";
import ShowTimeWraper from "./ShowTimeWraper";

const Timer = ({
  time,
  setTime,
  runnig,
  setRunning,
  isBreakTime,
  setIsBreakTime,
  isClose,
  setIsClose,
  timeGivenbyUser: { usrTimeInSec, usrBeakTimeInSec },
}) => {
  const deadLine = useRef(null);
  const IntervalIdRef = useRef(null);

  useEffect(() => {
    if (!runnig) {
      return;
    }
    const durationInMS = (isBreakTime ? usrBeakTimeInSec : usrTimeInSec) * 1000;

    deadLine.current = Date.now() + durationInMS;

    IntervalIdRef.current = setInterval(() => {
      const timeLeftInMs = deadLine.current - Date.now();

      const remeningSec = Math.ceil(timeLeftInMs / 1000);

      if (remeningSec < 0) {
        clearInterval(IntervalIdRef.current);

        setRunning(false);
        const nextIsBreak = !isBreakTime;
        setIsBreakTime(nextIsBreak);
        setTime(nextIsBreak ? usrBeakTimeInSec : usrTimeInSec);
      } else {
        setTime(remeningSec);
      }
    }, 200);

    return () => {
      if (IntervalIdRef.current) clearInterval(IntervalIdRef.current);
    };
  }, [runnig, isBreakTime]);

  function handelReset() {
    setRunning(false);
    setIsBreakTime(false);
    setTime(usrTimeInSec);
  }

  const splitedTime = {
    hour: Math.floor(time / 3600),
    minuts: Math.floor((time % 3600) / 60),
    seconds: time % 60,
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zen-ink font-['Rubik',_Arial,_sans-serif] text-[18vw] leading-none font-extrabold tracking-tighter text-neutral-600 select-none">
      <ShowTimeWraper
        isClose={isClose}
        setIsClose={setIsClose}
        setRunning={setRunning}
        runnig={runnig}
        handelReset={handelReset}
        isBreakTime={isBreakTime}
      >
        {time >= 3600 && (
          <>
            <ShowTime time={splitedTime.hour} />
            <span className="relative bottom-[1vw] text-zen-700">:</span>
          </>
        )}

        <ShowTime time={splitedTime.minuts} />
        <span
          className={`relative bottom-[1vw] ${time >= 3600 ? "text-zen-700" : "text-zen-600"}`}
        >
          :
        </span>
        <ShowTime time={splitedTime.seconds} />
      </ShowTimeWraper>
    </div>
  );
};

export default Timer;
