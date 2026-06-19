import React from "react";

const ShowTimeSetter = ({ minutsOptionsNum }) => {
  const minutsOptions = Array.from({ length: minutsOptionsNum }, (v, i) => i);

  return (
    // ＼(ﾟｰﾟ＼)
    <div className="relative flex items-center justify-center rounded-2xl border-2 border-zen-800 bg-zen-900 p-6">
      {/* <div className="absolute left-2 right-2 h-[2.5em] bg-neutral-800/50 rounded-lg pointer-events-none" ></div> */}
      <div className="no-scrollbar flex h-[calc(3_*_2.5em)] w-[clamp(60px,10vw,90px)] shrink-0 flex-col items-center overflow-y-auto scroll-smooth text-[clamp(18px,3vw,26px)]">
        {minutsOptions.map((num) => {
          const formetedNum = String(num).padStart(2, "0");
          return (
            <div
              key={num}
              className="flex h-[2.5em] w-full shrink-0 cursor-pointer items-center justify-center font-['Rubik'] font-semibold tracking-tighter text-zen-400"
            >
              {formetedNum}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTimeSetter;

