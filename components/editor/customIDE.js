import React, { useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CustomIDE({
  setCodeBlocks,
  codeBlocks,
  setShowDialog,
  content,
  setContent,
}) {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");

  const onHandleClick = () => {
    setCodeBlocks([...codeBlocks, { title: title, code: code }]);
    setShowDialog(false);
    setContent(`${content} {{${title}}}`);
  };

  return (
    <div className="w-full p-10 h-full flex flex-col items-end">
      <div className="w-full">
        <div className="text-white font-bold">Title</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-12 w-full font-bold pl-4"
        />
      </div>
      <div className="w-full text-xs h-full flex flex-row">
        <textarea
          className="w-1/2 p-4 font-mono mt-5"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
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
