import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function CrazyAddButton() {
  return (
    <>
      <div>
        <div className="absolute w-16 h-16 flex items-center justify-center text-2xl">
          <FontAwesomeIcon color="#1c2039" icon={faPlus} />
        </div>
        <div className="flex flex-row">
          <div className="w-8 h-8 rounded-tl-xl bg-white"></div>
          <div className="w-8 h-8 rounded-tr-xl bg-white"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-8 h-8 rounded-bl-xl bg-white"></div>
          <div className="w-8 h-8 rounded-br-xl bg-white"></div>
        </div>
      </div>
    </>
  );
}
