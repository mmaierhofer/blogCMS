import React, { useState } from "react";

import { setDoc, doc } from "firebase/firestore";
import CustomColorPicker from "../../colorPicker/CustomColorPicker";

import { db } from "../../../firebase/clientApp";

import { useSnackbar } from "react-simple-snackbar";
import {
  SNACKBAR_OPTIONS_ERROR,
  SNACKBAR_OPTIONS_SUCCESS,
} from "../../../helper/const";

export default function WorkflowStageSetting({
  workflowColor,
  workflowName,
  workflow,
  close,
  setWorkflowName,
}) {
  const [name, setName] = useState(workflowName);
  const [isStandard, setIsStandard] = useState(false);
  const [color, setColor] = useState(workflowColor);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [openSnackbar] = useSnackbar(SNACKBAR_OPTIONS_ERROR);
  const [openSuccessSnackbar] = useSnackbar(SNACKBAR_OPTIONS_SUCCESS);

  async function submit() {
    let isValid = true;

    if (name == undefined || name == "") {
      openSnackbar(
        "You have to give a name to the created workflow stage in order to save it.",
        4000
      );
    } else {
      let filteredWorkflow = workflow.filter(
        (workflowStage) => workflowStage.color != workflowColor
      );
      filteredWorkflow.every((workflowStage) => {
        if (workflowStage.color == color) {
          openSnackbar(
            "You can not give the same color to different workflow stages.",
            4000
          );
          isValid = false;
          return false;
        }
        if (workflowStage.name == name) {
          console.log(workflowStage);
          openSnackbar(
            "You shouldnt have identical names for different workflow stages. Choose a different one.",
            4000
          );
          isValid = false;
          return false;
        } else return true;
      });
      // Add a new document in collection "cities"
      if (isValid) {
        await setDoc(doc(db, "workflowStages", color), {
          color: color,
          name: name,
        })
          .then(openSuccessSnackbar("Workflow stage has been updated.", 4000))
          .then(setWorkflowName(name));
      }
    }
  }

  function cancel() {
    setName(workflowName);
    setColor(workflowColor);
    close();
  }

  return (
    <>
      <div className="w-full p-5 mb-12">
        <div className="font-bold">Name</div>
        <input
          className="text-input mt-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="font-bold">Color</div>
        <div className="flex flex-row w-full mt-2">
          <div
            className="border-primary border h-12 w-12 mb-0 p-2 cursor-pointer flex justify-center items-center"
            type="text"
            placeholder="Optional"
            onClick={(e) => setShowColorPicker(!showColorPicker)}
          >
            <div className="h-8 w-8" style={{ background: color }}></div>
          </div>
          {showColorPicker ? (
            <div className="absolute mt-2">
              <CustomColorPicker
                color={color}
                setColor={(e) => setColor(e)}
                close={(e) => setShowColorPicker(false)}
              />
            </div>
          ) : null}
          <input
            className="text-input mb-0 w-12/12 ml-4"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <div className="font-bold mt-4">Default</div>
          <div className="flex flex-row  h-12 items-center">
            <input
              type="checkbox"
              value={isStandard}
              onChange={(e) => setIsStandard(!isStandard)}
            />
            <div className="ml-2">
              Define this workflow stage as default for new products.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start">
          <div className="save-button w-32" onClick={submit}>
            save
          </div>
          <div className="save-button bg-red w-32 ml-4" onClick={cancel}>
            cancel
          </div>
        </div>
      </div>
    </>
  );
}
