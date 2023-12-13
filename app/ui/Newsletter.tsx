import React from 'react'

export default function Newsletter() {
  return (
<div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-black text-3xl text-[#2D2B2B]">
              Get Latest Job Notification
            </h1>
            <p className="w-[70%] text-[#9D9D9D] text-center leading-5">
              Get instant notification when new post is uploaded through email
              and it s free
            </p>
          </div>
          <form action="" className="flex items-start">
            <input
              type="text"
              placeholder="Enter the email..."
              className="bg-[#F3F3F3] placeholder:text-[#898989] py-2 rounded-l pl-2 md:w-96  outline-none border-[#B3B3B3] border border-r-0"
            />
            <button
              type="submit"
              className="bg-[#FFFDFD] py-[9px]  px-2 border-[#B3B3B3] border "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4998 1L10.0498 11.872"
                  stroke="#898989"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 1L13.85 20.7672L10.05 11.872L1.5 7.91853L20.5 1Z"
                  stroke="#898989"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
  )
}
