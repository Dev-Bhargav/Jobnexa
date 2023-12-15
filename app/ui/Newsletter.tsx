"use client";

import { subscribeUser } from "@/lib/serverActions";
import { useRef, useState } from "react";
import { useFormState } from 'react-dom';
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
        return !prevState
      }

      modalRef.current && (modalRef.current.dataset.hidden = "false");
      return !prevState;
    });
  };

  const initialState = {
    errors: undefined,
    message: "Initial",
  };

  const [state, dispatch] = useFormState(subscribeUser, initialState)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-black text-3xl text-[#2D2B2B]">
          Get Latest Job Notification
        </h1>
        <p className="w-[70%] text-[#9D9D9D] text-center leading-5">
          Get instant notification when new post is uploaded through email and
          it s free
        </p>
      </div>
      <form action={dispatch} className="flex items-start">
        <div className="flex flex-col gap-2 items-start">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#F3F3F3] placeholder:text-[#898989] py-2 rounded-l pl-2 md:w-96  outline-none border-[#B3B3B3] border"
            aria-describedby="name-error"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="  text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <input
            type="text"
            name="email"
            placeholder="Enter the email..."
            className="bg-[#F3F3F3] placeholder:text-[#898989] py-2 rounded-l pl-2 md:w-96  outline-none border-[#B3B3B3] border"
            aria-describedby="email.error"
          />
          {state.errors?.email &&
            state.errors.email.map((error) => (
              <p className="text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          {state.message === null && (
            <VerficationModal isOpen={isOpen}  handleButtonClick={handleButtonClick} fowardedRef={modalRef}  />
          )}
          <button
            type="submit"
            onClick={handleButtonClick}
            className="bg-black text-white py-2 rounded-lg px-4 flex font-medium border-[#B3B3B3] border"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
