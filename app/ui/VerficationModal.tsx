"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function VerficationModal({
  isOpen,
  fowardedRef,
  handleButtonClick,
  verifyMail
}: {
  isOpen: boolean,
  fowardedRef: React.Ref<HTMLDivElement>,
  handleButtonClick: () => void,
  verifyMail: string
}) {
  return (
    <>
      <div
        data-state={isOpen ? "open" : "closed"}
        data-hidden={"true"}
        ref={fowardedRef}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm data-[hidden=true]:hidden data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayClose"
      >
        <div
          data-state={isOpen ? "open" : "closed"}
          className="bg-white h-3/5 w-1/2 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border rounded-md shadow-lg flex data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose"
        >
          <div className="bg-violet-400 h-full w-1/3 rounded-md"></div>
          <div className="w-full relative">
            <X
              size={25}
              strokeWidth={3}
              onClick={handleButtonClick}
              className="cursor-pointer absolute right-0 mx-4 my-4"
            />
            <div className="w-3/4 mx-auto mt-32 flex flex-col gap-10 items-start">
              <div className="flex flex-col gap-4">
                <h1 className="font-black text-4xl">Confirm Your Email...</h1>
                <p>
                  We have sent verification email to
                  <strong> {verifyMail}</strong>
                </p>
              </div>
              <p>
                Unlock daily job notifications! Click on {"Verify Email"} to
                kickstart your job search journey
              </p>
              <Button>Resend</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
