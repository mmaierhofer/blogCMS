import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function CrazyAddButton() {
  return (
    <>
      <div className="group cursor-pointer ">
        <div className="absolute w-16 h-16 flex items-center justify-center text-2xl">
          <FontAwesomeIcon color="#1c2039" icon={faPlus} />
        </div>
        <div className="flex flex-row">
          <div className="crazy-add-button group-hover:mr-4"></div>
          <div className="crazy-add-button"></div>
        </div>
        <div className="flex flex-row">
          <div className="crazy-add-button group-hover:mt-4 group-hover:mr-4"></div>
          <div className="crazy-add-button group-hover:mt-4 "></div>
        </div>
      </div>
      <div className="absolute w-16 h-16 flex items-center justify-center text-2xl">
        <FontAwesomeIcon color="#1c2039" icon={faPlus} />
      </div>
    </>
  );
}
