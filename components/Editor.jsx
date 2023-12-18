"use client";

import { handleFormSubmit } from "@/lib/serverActions";
import { useEffect, useRef } from "react";

export default function Editor() {
  let editorRef = useRef();

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const Image = (await import("@editorjs/image")).default;

    const editor = new EditorJS({
      holder: "editor",
      onReady: () => {
        editorRef.current = editor;
      },
      inlineToolbar: true,
      tools: {
        header: Header,
        linkTool: LinkTool,
        list: List,
        table: {
          class: Table,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                let formData = new FormData();
                formData.append("file", file);
                let response = await fetch("http://localhost:3000/api/upload", {
                  method: "POST",
                  body: formData,
                });
                response = await response.json();
                return response;
              },
            },
          },
        },
      },
      placeholder: "Type here to write your post...",
    });
  };

  useEffect(() => {
    initializeEditor();
  }, []);

  return (
    <div
      id="editor"
      ref={editorRef}
      className="border w-full min-h-[600px] my-4"
    ></div>
  );
}
