import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CodeBlocks({ setShowDialog, codeBlocks }) {
  console.log(codeBlocks);
  return (
    <>
      <div className="add-button w-32 flex flex-row">
        <FontAwesomeIcon icon={faPlusCircle} />
        <div
          onClick={(e) => setShowDialog(true)}
          className="w-2/3 pl-4 font-bold"
        >
          Code
        </div>
      </div>
      <div>
        {codeBlocks.map((codeBlock) => {
          return <div>{codeBlock}</div>;
        })}
      </div>
    </>
  );
}
