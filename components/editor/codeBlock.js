import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-3/4 bg-widget flex flex-col">
      <div
        className="w-full  text-white h-12 mt-2 flex justify-between pl-2 pr-2 items-center"
        onClick={(e) => setShow(!show)}
      >
        <div>Code Block</div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {show ? (
        <div className="h-content">
          <SyntaxHighlighter language="jsx" style={darcula}>
            function def const
          </SyntaxHighlighter>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
