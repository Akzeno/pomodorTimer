import { useEffect, useState } from "react";
import ShowTime from "./ShowTime";
import ShowTimeWraper from "./ShowTimeWraper";

const Timer = () => {
  const [time, setTime] = useState(300);
  const [runnig, setRunning] = useState(false);

  useEffect(() => {
    if (time <= 0) return;
    if (!runnig) return;
    const intervelId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervelId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervelId);
  }, [runnig]);

  function handelReset() {
    setRunning(false);
    setTime(300);
  }

  const hour = Math.floor(time / 3600);
  const minuts = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="flex h-screen items-center justify-center bg-zen-ink font-['Rubik'] text-[18vw] leading-none font-extrabold tracking-tighter text-neutral-600 select-none">
      <ShowTimeWraper setRunning={setRunning} runnig={runnig} handelReset={handelReset}>
        {time >= 3600 && (
          <>
            <ShowTime time={hour} />
            <span className="relative bottom-[1vw]">:</span>
          </>
        )}

        <ShowTime time={minuts} />
        <span className="relative bottom-[1vw]">:</span>
        <ShowTime time={seconds} />
      </ShowTimeWraper>
    </div>
  );
};

export default Timer;
