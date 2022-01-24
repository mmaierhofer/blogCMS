import React from "react";

export default function PostPreview({ content }) {
  console.log(content);

  return (
    <>
      <div className="flex flex-row justify-center h-full items-start">
        <div className="bg-white w-80 h-5/6 border-4 p-2 rounded-xl border-black">
          <div className="h-20 w-full"></div>
          <div>
            <div
              className=" w-max-full w-fit text-justify"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
