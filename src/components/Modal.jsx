import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <>
      <div className= {`h-[200px] w-2xl bg-zen-400 hidden`} >hellow</div>
    </>,
    document.getElementById("portal"),
  );
};

export default Modal;
