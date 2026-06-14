import { useEffect, useState } from "react";
import ShowTime from "./ShowTime";
import ShowTimeWraper from "./ShowTimeWraper";

const Timer = () => {
  const timeGivenbyUser = {
    usrTimeInSec: 12,
    usrBeakTimeInSec: 5,
  };

  const [time, setTime] = useState(timeGivenbyUser.usrTimeInSec);
  const [runnig, setRunning] = useState(false);
  const [isbreakTime, setIsBreakTime] = useState(false);
  

  useEffect(() => {
    if (time <= 0 || !runnig) return;

    const intervelId = setInterval(() => {
      setTime((prevTime) => {
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervelId);
  }, [runnig]);

  useEffect(() => {
    if (time === 0) {
      setRunning(false);

      let nextIsBreak;

      setIsBreakTime((prevStat) => {
        nextIsBreak = !prevStat;
        setTime(
          nextIsBreak
            ? timeGivenbyUser.usrBeakTimeInSec
            : timeGivenbyUser.usrTimeInSec,
        );
        return nextIsBreak;
      });
    }
  }, [time, timeGivenbyUser.usrBeakTimeInSec, timeGivenbyUser.usrTimeInSec]);

  function handelReset() {
    setRunning(false);
    setTime(timeGivenbyUser.usrTimeInSec);
  }

  const splitedTime = {
    hour: Math.floor(time / 3600),
    minuts: Math.floor((time % 3600) / 60),
    seconds: time % 60,
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zen-ink font-['Rubik'] text-[18vw] leading-none font-extrabold tracking-tighter text-neutral-600 select-none">
      <ShowTimeWraper
        setRunning={setRunning}
        runnig={runnig}
        handelReset={handelReset}
        isbreakTime={isbreakTime}
      >
        {time >= 3600 && (
          <>
            <ShowTime time={splitedTime.hour} />
            <span className="relative bottom-[1vw]">:</span>
          </>
        )}

        <ShowTime time={splitedTime.minuts} />
        <span className="relative bottom-[1vw]">:</span>
        <ShowTime time={splitedTime.seconds} />
      </ShowTimeWraper>
    </div>
  );
};

export default Timer;
