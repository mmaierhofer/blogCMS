import React from "react";
import { useState, useEffect } from "react";
import { createRandomApiKey } from "../../helper/utilityFunctions";
import { collection, query, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from '../../firebase/clientApp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ApiSettings() {

    const [name, setName] = useState("");
    const [apiKeys, setApiKeys] = useState([])

    useEffect(() => {
        getApiKeys();
    }, [])

    async function getApiKeys() {
        const q = query(collection(db, "apiKeys"));

        const querySnapshot = await getDocs(q);

        let apieKeyBuffer = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            apieKeyBuffer.push(doc.data());
          });
        
        setApiKeys(apieKeyBuffer);
    }

    async function createKey() {
        
        let apiKey = createRandomApiKey();
        console.log(apiKey);
         // Add a new document in collection "cities"
         await setDoc(doc(db, "apiKeys", apiKey), {
            key: apiKey,
            name: name
        });
        getApiKeys();
    }

    async function deleteKey(apiKey) {

        await deleteDoc(doc(db, "apiKeys", apiKey));
        getApiKeys();
    }

    return (
        <>
            <div className="flex flex-row w-full pl-20 pt-20">
                <div className="w-1/4 flex flex-col">
                    <div className="font-bold">API-Keys</div>
                    <div>Public access tokens are only for accessing the published version while preview tokens are for accessing the draft version also. Both are read-only tokens.</div>
                </div>
                <div className="w-3/4 flex flex-col items-center">
                    <div className="bg-white h-32 w-3/4 shadow-md flex flex-col pl-5 pr-5 justify-center">
                        <div className="font-bold">Name</div>
                        <div className="flex flex-row items-center justify-between">
                        <div className="w-3/4">
                            <input className="text-input mb-0" type="text" placeholder="Optional" value={name} onChange={e=>(setName(e.target.value))}/>
                        </div>
                        <div className="w-1/4 flex flex-col items-end">
                        <div className="save-button w-3/4" onClick={e => (createKey())}>Create Key</div>
                        </div>
                        </div>
                    </div>    
                    <div className="w-full flex flex-col items-center">
                    {apiKeys.map(apiKey => {
                        return (
                            <div className="w-3/4 p-4 shadow-sm flex-row flex justify-between" key={apiKey.key}>
                                <div className="w-5/6">
                                {apiKey.key}
                                </div>
                                <div className="w-1/12 text-darkGray text-right">
                                    {apiKey.name}
                                </div>
                                <div className="cursor-pointer" onClick={e => (deleteKey(apiKey.key))}>
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