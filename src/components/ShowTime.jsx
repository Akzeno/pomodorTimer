import React from "react";

const ShowTime = ({ time }) => {
  const formetNuber = (num) => String(num).padStart(2, "0");

  return (
    <h1 className="w-[25vw] text-zen-500 text-center tabular-nums">{formetNuber(time)}</h1>
  );
};

export default ShowTime;
