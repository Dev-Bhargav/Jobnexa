import React from 'react'
import Editor from "@/components/Editor"
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
import { handleFormSubmit } from '@/lib/serverActions';

export default function Page() {
  async function dispatch(e) {
    let editorContent = await editorRef.current?.save();
    handleFormSubmit(e, editorContent);
  }
  return (
    <section className="w-full mt-7">
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
        <Editor/>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="inputFeild"
          />
          <select name="category" placeholder="Category" className="inputFeild">
            <option value="" disabled>- Select a category</option>
            <option value="govt">Govt</option>
            <option value="railway">Railway</option>
            <option value="bank">Bank</option>
            <option value="defence">Defence</option>
          </select>
        </div>
        <AlertDialog>
          <AlertDialogTrigger className="bg-black text-white font-medium px-3 py-1 rounded-md">Open</AlertDialogTrigger>
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
  )
}
