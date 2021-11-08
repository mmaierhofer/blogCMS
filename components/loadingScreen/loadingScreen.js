import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LoadingScreen() {

    return (
        <>
            <div className="w-screen h-screen absolute top-0 left-0 bg-primary flex justify-center items-center text-white">
                <div className="animate-spin text-lg">
                <FontAwesomeIcon icon={faCircleNotch} size="5x"/>
                </div>
                
            </div>
        </>
    )
}
