import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WorkflowStageSetting from "./workflowStageSetting";

export default function WorkflowListitem({
  color,
  workflowName,
  deleteWorkflow,
  editIsOpen,
  workflow,
  setEditIsOpen,
}) {
  const [name, setName] = useState(workflowName);

  function updateOpenArray() {
    let editIsOpenList = [];
    if (editIsOpen[color] == true) {
      setEditIsOpen(editIsOpenList);
    } else {
      editIsOpenList[color] = true;
      setEditIsOpen(editIsOpenList);
    }
  }

  return (
    <div className="w-full cursor-pointer">
      <div
        className="w-full p-4 border-b border-gray flex-row flex justify-between"
        onClick={(e) => updateOpenArray(!editIsOpen)}
      >
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
          <div className="w-1/2 text-right h-full">
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
      {editIsOpen[color] ? (
        <WorkflowStageSetting
          workflowColor={color}
          workflowName={name}
          deleteWorkflow={deleteWorkflow}
          close={updateOpenArray}
          workflow={workflow}
          setWorkflowName={setName}
        />
      ) : null}
    </div>
  );
}
