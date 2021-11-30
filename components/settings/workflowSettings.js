import React from "react";
import { useState, useEffect } from "react";
import { createRandomApiKey } from "../../helper/utilityFunctions";
import { collection, query, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from '../../firebase/clientApp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCog, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomColorPicker from "../colorPicker/CustomColorPicker";

export default function WorkflowSettings() {

    const [name, setName] = useState();
    const [workflow, setWorkflow] = useState([])
    const [color, setColor] = useState("#90ee90");
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        getWorkflow();
    }, [])

    async function getWorkflow() {
        const q = query(collection(db, "workflowStages"));

        const querySnapshot = await getDocs(q);

        let apieKeyBuffer = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            apieKeyBuffer.push(doc.data());
          });
        
        setWorkflow(apieKeyBuffer);
    }

    async function createWorkflowStage() {
        
         // Add a new document in collection "cities"
         await setDoc(doc(db, "workflowStages", color), {
            color: color,
            name: name
        });
        getWorkflow();
    }

    async function deleteWorkflowStep(key) {

        await deleteDoc(doc(db, "workflowStages", key));
        getWorkflow();
    }

    return (
        <>
            <div className="flex flex-row w-full pl-20 pt-20">
                <div className="w-1/4 flex flex-col">
                    <div className="font-bold">Workflow stages</div>
                    <div>Everybody handles their shops workflow differently. That is why you can freely customize your workflow according to your needs, so the
                        program is as close to your needs as possible.
                    </div>
                </div>
                <div className="w-3/4 flex flex-col items-center">
                    <div className="bg-white h-32 w-3/4 shadow-md flex flex-col pl-5 pr-5 justify-center">
                        <div className="flex flex-row">
                            <div className="font-bold w-2/6">Color</div>                            
                            <div className="font-bold">Name</div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                        <div className="w-2/6 flex flex-row justify-between pr-5">
                            <div className="w-3/12 pr-2">
                            <div className="border-primary border h-12 w-12 mb-0 p-2 cursor-pointer flex justify-center items-center" type="text" placeholder="Optional" value={name} onClick={e=>(setShowColorPicker(!showColorPicker))}>
                                <div className="h-8 w-8" style={{background: color}}></div>
                            </div>
                            {showColorPicker ? <div className="absolute mt-2">
                                <CustomColorPicker color={color} setColor={e => (setColor(e))} close={e=>(setShowColorPicker(false))}/>
                            </div> : null}
                            
                            </div>
                            <input className="text-input mb-0 w-9/12" type="text" value={color} onChange={e=>(setColor(e.target.value))}/>
                        </div>
                        <div className="w-5/12">
                            <input className="text-input mb-0" type="text" placeholder="In Development, Returned ..." value={name} onChange={e=>(setName(e.target.value))}/>
                        </div>
                        <div className="w-3/12 flex flex-col items-end">
                        <div className="save-button w-5/6 text-md" onClick={e => (createWorkflowStage())}>Add stage</div>
                        </div>
                        </div>
                    </div>    
                    <div className="w-full flex flex-col items-center">
                    {workflow.map(workflowStep => {
                        return (
                            <div className="w-3/4 p-4 shadow-sm flex-row flex justify-between" key={workflowStep.name}>
                                <div className="w-4 text-darkGray cursor-pointer">
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                                <div className="w-1/12">
                                    <div style={{backgroundColor: workflowStep.color}} className="w-5 h-5 rounded-full"/>
                                </div>
                                <div className="w-8/12 text-darkGray ">
                                    {workflowStep.name}
                                </div>
                                <div className="w-1/12" className="cursor-pointer">
                                    <FontAwesomeIcon icon={faCog} />
                                </div>
                                <div className="w-1/12" className="cursor-pointer" onClick={e => (deleteWorkflowStep(workflowStep.color))}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        )
                    })}    
                    </div>                
                </div>
            </div>
        </>
    )
}