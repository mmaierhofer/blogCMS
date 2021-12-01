import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkflowListitem({ color, name, deleteWorkflow }) {
  return (
    <div className="w-full">
      <div className="w-full p-4 border-b border-gray flex-row flex justify-between">
        <div className="w-4 text-darkGray cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="w-1/12">
          <div
            style={{ backgroundColor: color }}
            className="w-5 h-5 rounded-full"
          />
        </div>
        <div className="w-8/12 text-darkGray ">{name}</div>
        <div className="w-1/12 cursor-pointer text-right flex flex-row justify-between">
          <div className="w-1/2 text-right">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={(e) => deleteWorkflow(color)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
