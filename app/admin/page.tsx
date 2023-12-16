"use client";
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
import { handleFormSubmit } from "@/lib/serverActions";

export default function Editor() {

  let editorRef = useRef(null);

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    // @ts-ignore
    const Embed: any = (await import("@editorjs/embed")).default;
    // @ts-ignore
    const Table = (await import("@editorjs/table")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    // @ts-ignore
    const LinkTool = (await import("@editorjs/link")).default;
    // @ts-ignore
    const Image = (await import("@editorjs/image")).default;

    const editor = new EditorJS({
      holder: "editorDiv",
      onReady: () => {
        if (editorRef.current) {
          // @ts-ignore
          editorRef.current = editor;
        }
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
              async uploadByFile(file: File) {
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

  async function dispatch(e: FormData) {
    let editorContent = await (editorRef.current as any)?.save();
    handleFormSubmit(e, editorContent);
  }

  return (
    <section className="w-full mt-12">
      <form
        id="job-blog"
        action={dispatch}
        className="min-h-screen flex flex-col items-center justify-between "
      >
        <input
          name="title"
          id="title"
          placeholder="Post Title"
          className="inputFeild"
        ></input>
        <div
          id="editorDiv"
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
            <option value="govt">Govt</option>
            <option value="railway">Railway</option>
            <option value="bank">Bank</option>
            <option value="defence">Defence</option>
          </select>
        </div>
        <AlertDialog>
          <AlertDialogTrigger className="bg-black text-white font-medium px-3 py-1 rounded-md">
            Open
          </AlertDialogTrigger>
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
              <AlertDialogAction type="submit" form="job-blog">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </section>
  );
}
