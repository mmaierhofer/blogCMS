import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddBlockButton() {
  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div></div>
      </div>
    </>
  );
}
