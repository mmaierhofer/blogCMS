import { faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import {
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/clientApp"; 

export default function LogoutModule({isActive, setIsActive}) {

    const logout = async () => {
        await signOut(auth);
      };

    if(isActive) {
        return (
        <>
          <div onClick={() => setIsActive(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/4 my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none shadow-lg" onClick={() => {}}>
                  <div className="absolute right-0 mr-3 top-0 mt-2 text-grey cursor-pointer z-50" onClick={() => setIsActive(false)}>
                      <FontAwesomeIcon icon={faTimes} />
                  </div>
                <div className="relative p-6 flex flex-col justify-center items-center">
                  <div className="bg-green rounded-full h-20 w-20 flex items-center justify-center text-white -mt-16">
                      <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
                  </div>
                  <div className="mt-6 font-bold text-xl">
                      Sign Out?
                  </div>
                  <div>
                      All your information is saved automatically.
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                <button
                    className="bg-green text-white font-bold uppercase text-sm w-2/4 px-6 py-3 rounded shadow hover:shadow-lg hover:bg-greenHover outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => logout()}
                  >
                    Yes, Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )
    } else {
        return (
            <>
            </>
        )
    }
    
}