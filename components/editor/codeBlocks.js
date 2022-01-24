import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CodeBlocks() {
  return (
    <>
      <div className="add-button w-32 flex flex-row">
        <FontAwesomeIcon icon={faPlusCircle} />
        <div className="w-2/3 pl-4 font-bold">Code</div>
      </div>
    </>
  );
}
