import React from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


import { auth } from "../../firebase/clientApp"; 

export default function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
  
    onAuthStateChanged(auth, (currentUser) => {
        
    });

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      
  
    return (
        <>
        <div className="flex justify-center items-center w-screen h-screen bg-primary">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-4/12">
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" >
                Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" onChange={(event) => {
            setLoginEmail(event.target.value);
          }}></input>
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"  onChange={(event) => {
            setLoginPassword(event.target.value);
          }}></input>
                </div>
            <div className="flex items-center justify-between">
                <button className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded" type="button"  onClick={login}>
                Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-primary" href="/login">
                Forgot Password?
                </a>
            </div>
        </div>
        </div>
        </>
    )
}