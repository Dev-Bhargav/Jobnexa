"use client";
import { handleFormSubmit } from "@/lib/serverActions";
import React, { useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Editor() {
  let editorRef = useRef();

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
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
        embed: Embed,
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

  async function dispatch(e) {
    let editorContent = await editorRef.current?.save();
    handleFormSubmit(e, editorContent);
  }

  return (
    <section className="w-full mt-12">
      <form
        id="job-blog"
        action={dispatch}
        className="min-h-screen flex flex-col items-center justify-between"
      >
        <input
          name="title"
          id="title"
          placeholder="Post Title"
          className="inputFeild"
        ></input>
        <div
          id="editor"
          ref={editorRef}
          className="border w-full min-h-[600px] my-4"
        ></div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="inputFeild"
          />
          <select name="category" placeholder="Category" className="inputFeild">
            <option value="Govt">Govt</option>
            <option value="Govt">Railway</option>
            <option value="Govt">Bank</option>
            <option value="Govt">Defence</option>
          </select>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit" form="job-blog">Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </section>
  );
}
