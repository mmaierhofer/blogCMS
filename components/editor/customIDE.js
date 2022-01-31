import React, { useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CustomIDE({ setCodeBlocks, codeBlocks }) {
  const [code, setCode] = useState("");

  const onHandleClick = () => {
    setCodeBlocks([...codeBlocks, code]);
  };

  return (
    <div className="w-full p-10 h-full flex flex-col items-end">
      <div className="w-full text-xs h-full flex flex-row">
        <textarea
          className="w-1/2 p-4 font-mono text-white"
          value={code}
          autoFocus
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          style={{ background: "rgb(43, 43, 43)" }}
          spellCheck={false}
        />
        <div className="h-full w-1/2 overflow-y-auto">
          <SyntaxHighlighter language="jsx" style={darcula}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div
        className="add-button w-32 font-bold"
        onClick={(e) => onHandleClick()}
      >
        Add Block
      </div>
    </div>
  );
}
