import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ codeBlock }) {
  const [show, setShow] = useState(false);

  const { title, code } = codeBlock;

  return (
    <div className="w-3/4  flex flex-col">
      <div
        className="w-full  text-white bg-widget h-12 mt-2 flex justify-between pl-2 pr-2 items-center cursor-pointer"
        onClick={(e) => setShow(!show)}
      >
        <div>{title}</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {show ? (
        <div className="h-content">
          <SyntaxHighlighter language="jsx" style={darcula}>
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
