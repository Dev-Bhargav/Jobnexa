"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function VerficationModal({
  isOpen,
  fowardedRef,
  handleButtonClick,
}: {
  isOpen: boolean;
  fowardedRef: React.Ref<HTMLDivElement>;
  handleButtonClick: () => void;
}) {
  function resendClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
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
          className="bg-white w-[80vw] max-w-[865px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border rounded-md shadow-lg flex data-[state=open]:animate-contentShow data-[state=closed]:animate-contentClose"
        >
          <div className="bg-black w-1/3 rounded-md"></div>
          <div className="w-full relativex">
            <X
              size={25}
              strokeWidth={3}
              onClick={handleButtonClick}
              className="cursor-pointer absolute right-0 mx-4 my-4"
            />
            <div className="w-3/4 mx-auto xs:my-12 sm:my-20 md:my-28 lg:mt-32 flex flex-col gap-5 xl:gap-10 items-start xs:text-sm sm:text-base">
              <div className="w-full flex flex-col gap-4">
                <h1 className="font-black text-3xl md:text-4xl">
                  Confirm Your Email...
                </h1>
                <p>
                  We have sent verification email to
                  <strong> email</strong>
                </p>
              </div>
              <p>
                Unlock daily job notifications! Click on {"Verify Email"} to
                kickstart your job search journey
              </p>
              <Button onClick={resendClick}>Resend</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
