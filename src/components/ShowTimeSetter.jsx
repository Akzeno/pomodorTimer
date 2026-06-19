import { useEffect, useRef } from "react";

const ShowTimeSetter = ({ minutsOptionNum }) => {
  // array of number that dev want to show [0,1,2,....,59]
  const minutsBaseOptions = Array.from(
    { length: minutsOptionNum },
    (v, i) => i,
  );

  const minutsOptions = [
    ...minutsBaseOptions,
    ...minutsBaseOptions,
    ...minutsBaseOptions,
  ];

  const timeSelecltionHolderContainer = useRef(null);

  useEffect(() => {
    const container = timeSelecltionHolderContainer.current;
    if (!container) return;

    const firstChild = container.firstElementChild;

    const singleNumberDivHight = firstChild.getBoundingClientRect().height;
    const totalDivsHightsInSingleLoop = minutsOptionNum * singleNumberDivHight;

    container.scrollTop = totalDivsHightsInSingleLoop;

    const handleScroll = () => {
      if (container.scrollTop < totalDivsHightsInSingleLoop) {
        container.scrollTop += totalDivsHightsInSingleLoop;
      } else if (container.scrollTop >= totalDivsHightsInSingleLoop * 2) {
        container.scrollTop -= totalDivsHightsInSingleLoop;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return ()=> {container.removeEventListener("scroll", handleScroll);}
  }, [minutsOptionNum]);

  return (
    // ＼(ﾟｰﾟ＼)
    <div className="relative flex items-center justify-center rounded-2xl border-2 border-zen-800 bg-zen-900 p-6">
      {/* <div className="absolute left-2 right-2 h-[2.5em] bg-neutral-800/50 rounded-lg pointer-events-none" ></div> */}
      <div
        ref={timeSelecltionHolderContainer}
        className="no-scrollbar flex h-[calc(3_*_2.5em)] w-[clamp(60px,10vw,90px)] shrink-0 flex-col items-center overflow-y-auto scroll-smooth  text-[clamp(18px,4vw,28px)]"
      >
        {minutsOptions.map((num, indx) => {
          const formetedNum = String(num).padStart(2, "0");
          return (
            <div
              key={indx}
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
