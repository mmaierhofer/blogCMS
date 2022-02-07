import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import PostEditor from "../../components/editor/postEditor";
import PostPreview from "../../components/editor/postPreview";
import CodeBlocks from "../../components/editor/codeBlocks";
import CustomIDE from "../../components/editor/customIDE";
import AddBlockButton from "../../components/editor/addBlockButton";

export default function Add() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [codeBlocks, setCodeBlocks] = useState([]);

  return (
    <>
      <div className="page flex items-center flex-col pb-20 pl-0">
        {showDialog ? (
          <div
            className="absolute w-full h-full top-0 bg-opacity-95 shadow-2xl bg-black z-10"
            onClick={(e) => setShowDialog(false)}
          />
        ) : (
          <></>
        )}
        {showDialog ? (
          <div
            className="absolute w-1/2 h-2/3 top-40 bg-opacity-95 shadow-2xl z-50 blur-xl"
            style={{ background: "rgb(43, 43, 43)" }}
          >
            <CustomIDE
              setCodeBlocks={setCodeBlocks}
              codeBlocks={codeBlocks}
              setShowDialog={setShowDialog}
              setContent={setContent}
              content={content}
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col w-full items-center pl-20">
          <div className="w-full pl-8 bg-primary text-white h-20 shadow-md flex items-center text-lg fixed z-20">
            <Link href="/products">
              <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </Link>
            <div className="ml-4">Add Post</div>
          </div>
          <div className="mt-32 flex w-full flex-row ">
            <div className="w-1/4">
              <PostPreview
                content={content}
                title={title}
                codeBlocks={codeBlocks}
              />
            </div>
            <div className="w-1/2">
              <div className="text-white font-bold">Title</div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 w-full font-bold pl-4"
              />
              <div className="mt-5">
                <AddBlockButton />
              </div>
            </div>
            <div className="w-1/4 pl-12">
              <div className="h-28"></div>
              <CodeBlocks
                setShowDialog={setShowDialog}
                codeBlocks={codeBlocks}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
