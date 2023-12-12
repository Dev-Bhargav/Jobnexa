"use server";
import { createBlog } from "../lib/data";


interface EditorContent {
  time: number;
  blocks: Array<Record<string, string | object>>;
  version: string,
}

export async function handleFormSubmit(e: FormData, editorContent: EditorContent) {

  let uploadBlogDetails:any = {
    title: e.get("title"),
    description: e.get("description"),
    content: editorContent,
  };
  let response = await createBlog(uploadBlogDetails).catch((err) =>
    console.log(err.message)
  );
  console.log(response);
}
