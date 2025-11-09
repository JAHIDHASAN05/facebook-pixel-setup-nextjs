'use client'
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = () => {
  const editor = useRef(null);

  const config = {
    height: 400,
    toolbarSticky: false,
    statusbar: false, 
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "paragraph", // 👈 this button lets you change block type (p, h1, h2, etc.)
      "|",
      "align",
      "|",
      "link",
      "image",
      "undo",
      "redo",
      "source",
    ],
    controls: {
      paragraph: {
        list: {
          p: "Paragraph",
          h1: "Heading 1",
          h2: "Heading 2",
          h3: "Heading 3",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <JoditEditor
        ref={editor}
        config={config}
        onBlur={(newContent) => console.log(newContent)}
      />
    </div>
  );
};

export default Editor;
