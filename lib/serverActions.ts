"use server";
import { createBlog } from "./data";


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
    category: e.get("description"),
  };
  let response = await createBlog(uploadBlogDetails).catch((err) =>
    console.log(err.message)
  );
  console.log(response);
}
