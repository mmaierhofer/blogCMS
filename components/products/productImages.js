import { faImage, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ImageUpload from "./imageUpload";

export default function ProductImages() {

    return (
        <>
            <div className="w-full h-96 p-8">
                <div className="flex flex-col w-full">
                    <div className="w-full md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Product Images
                        </label>
                    </div>
                    <div className="flex-row flex justify-between">
                        <div className="h-44 p-1 pl-0">
                            <ImageUpload />
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}