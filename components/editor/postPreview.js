import React from "react";
import logo from "../../public/logo.png";

import Image from "next/image";

export default function PostPreview({ content, title }) {
  return (
    <>
      <div className="flex flex-row justify-center h-full items-start">
        <div className="bg-white w-80 h-full border-8 rounded-xl border-black pt-4">
          <div className="h-20 w-full flex flex-col justify-center items-center pt-4">
            <div className="w-12">
              <Image src={logo} alt="logo" className="w-5 h-5" />
            </div>
            <div
              className="font-bold text-react-100 text-2xl"
              style={{ color: "#53c1de" }}
            >
              react-butter.com
            </div>
          </div>
          <div className="h-16 w-full bg-secondary mt-8"></div>
          <div>
            <div className="pl-8 mt-4 font-bold text-md w-full pr-8">
              {title}
            </div>
            <div
              className=" w-max-full w-fit text-justify pl-8 mt-4 pr-8 text-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
