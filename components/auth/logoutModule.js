import React from 'react';

export default function LogoutModule({isActive}) {

    console.log(isActive);
    if(isActive) {
        return (
            <div className="h-screen w-screen bg-opacity-40 absolute top-0 left-0 blur-lg flex justify-center items-center">
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    
                </div>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
    
}