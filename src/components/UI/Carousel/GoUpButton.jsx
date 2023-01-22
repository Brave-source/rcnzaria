import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import { createPortal } from "react-dom";

const UpBtn = () => {
  const GoToPageTopHandler = () => {
    document.querySelector("html").scrollTop = 0;
  };
  return (
    <button
      title="Scroll to page top"
      onClick={GoToPageTopHandler}
      className="btn btn-outline btn-sm btn-circle bg-orange-100 fixed bottom-2 md:bottom-8 right-5 z-50 bounce"
    >
      <ArrowUpIcon className="w-5" />
    </button>
  );
};
const GoUpButton = () =>
  createPortal(<UpBtn />, document.getElementById("floating"));

export default GoUpButton;
