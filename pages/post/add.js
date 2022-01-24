import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import PostEditor from "../../components/editor/postEditor";
import PostPreview from "../../components/editor/postPreview";
import CodeBlocks from "../../components/editor/codeBlocks";

export default function Add() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="page flex items-center flex-col pb-20">
        <div className="flex flex-col w-full items-center">
          <div className="w-full ml-16 bg-primary text-white h-20 shadow-md flex items-center pl-8 text-lg fixed z-50">
            <Link href="/products">
              <div className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </Link>
            <div className="ml-4">Add Post</div>
          </div>
          <div className="mt-40 flex w-full flex-row">
            <div className="w-1/4">
              <PostPreview content={content} />
            </div>
            <div className="w-1/2">
              <PostEditor content={content} setContent={setContent} />
            </div>
            <div className="w-1/4 pl-12">
              <CodeBlocks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
