"use client";

import { State, subscribeUser } from "@/lib/serverActions";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import FormSubmit from "./FormSubmit";
import VerficationModal from "./VerficationModal";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen((prevState) => {

      if (prevState) {
        setTimeout(() => {
          modalRef.current && (modalRef.current.dataset.hidden = "true");
        }, 401);
        return !prevState;
      }

      modalRef.current && (modalRef.current.dataset.hidden = "false");
      return !prevState;
    });
  };

  const initialState: State = {
    errors: {},
    message: "Inital Message",
    userFound: false,

  };

  const [state, dispatch] = useFormState(subscribeUser, initialState);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-black text-3xl xs:leading-[34px] pb-1 text-center text-[#2D2B2B]">
          Get Latest Job Notification
        </h1>
        <p className="w-[80%] sm:w-[70%] text-[#9D9D9D] text-center leading-5">
          Get instant notification when new post is uploaded through email and
          it s free
        </p>
      </div>
      <form action={dispatch} id="subscribeMail" className="flex items-start">
        <div className="flex flex-col gap-1 items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={cn("py-1.5 rounded pl-2 xs:w-64 sm:w-80 text-[15px] outline-none border border-[#dfdfdc] bg-[#f7f7f4] placeholder:text-[#898989]", {
              "border-red-500" : state.errors?.name
            })}
            aria-describedby="name-error"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <input
            type="text"
            name="email"
            placeholder="Enter the email..."
            className={cn("py-1.5 rounded pl-2 xs:w-64 sm:w-80 text-[15px] outline-none border border-[#dfdfdc] bg-[#f7f7f4] placeholder:text-[#898989]", {
              "border-red-500" : state.errors?.name
            })}
            aria-describedby="email.error"
          />
          {state.errors?.email &&
            state.errors?.email.map((error) => (
              <p className="text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}

          <VerficationModal
            isOpen={isOpen}
            handleButtonClick={handleButtonClick}
            fowardedRef={modalRef}
          />

          <FormSubmit verifyEmail={handleButtonClick} state={state} />
        </div>
      </form>
    </div>
  );
}
