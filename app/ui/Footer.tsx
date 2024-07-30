import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t border-gray-200 h-[300px] mt-10 flex flex-col items-center justify-center gap-5 rounded-t-lg">
      <div className="h-2/3 flex items-center justify-evenly">
        <div className="w-1/3">
          <h1 className="text-[#000000] text-2xl font-bold">About</h1>
          <p className="text-[#7C808B] font-semibold text-lg leading-5 pt-2">
            Welcome to jobnexa! We are your go-to for job updates. Our short and
            easy-to-read blog posts will keep you in the know about the latest
            job openings. Discover opportunities, stay informed, and advance
            your career with us!
          </p>
        </div>
        <div className="w-0.5 h-full bg-gray-200"></div>
        <div className="flex flex-col items-center ">
          <div>
            <Link href="/" aria-label="Logo">
              <svg
                className="w-[300px]"
                viewBox="0 0 180 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="black" />
                <circle cx="18" cy="17.6111" r="11" fill="#FEFEFE" />
                <rect
                  x="17.3857"
                  y="6"
                  width="1.22222"
                  height="23.2222"
                  fill="black"
                />
                <ellipse
                  cx="17.9997"
                  cy="17.6111"
                  rx="9.16667"
                  ry="9.16667"
                  fill="black"
                />
                <ellipse
                  cx="17.9984"
                  cy="17.6111"
                  rx="7.33333"
                  ry="7.33333"
                  fill="#FEFEFE"
                />
                <rect
                  x="9.44482"
                  y="17"
                  width="17.1111"
                  height="1.22222"
                  fill="black"
                />
                <circle cx="17.9927" cy="17.6111" r="5.5" fill="black" />
                <path
                  d="M21.6659 17.6111C21.6659 19.6362 20.0242 21.2778 17.9992 21.2778C15.9741 21.2778 14.3325 19.6362 14.3325 17.6111C14.3325 15.5861 15.9741 13.9444 17.9992 13.9444C20.0242 13.9444 21.6659 15.5861 21.6659 17.6111Z"
                  fill="#FEFEFE"
                />
                <path
                  d="M19.8327 17.6111C19.8327 18.6236 19.0119 19.4445 17.9993 19.4445C16.9868 19.4445 16.166 18.6236 16.166 17.6111C16.166 16.5986 16.9868 15.7778 17.9993 15.7778C19.0119 15.7778 19.8327 16.5986 19.8327 17.6111Z"
                  fill="black"
                />
                <path
                  d="M50.7045 7.63636H56.1534V21.5966C56.1468 22.9223 55.812 24.089 55.1491 25.0966C54.4929 26.0975 53.5848 26.8797 52.4247 27.4432C51.2713 28 49.9422 28.2784 48.4375 28.2784C47.1316 28.2784 45.9384 28.053 44.858 27.6023C43.7775 27.1449 42.9157 26.429 42.2727 25.4545C41.6297 24.4735 41.3116 23.2008 41.3182 21.6364H46.8466C46.8665 22.1468 46.9527 22.5777 47.1051 22.929C47.2642 23.2803 47.483 23.5455 47.7614 23.7244C48.0464 23.8968 48.3911 23.983 48.7955 23.983C49.2064 23.983 49.5511 23.8935 49.8295 23.7145C50.1146 23.5355 50.33 23.2704 50.4759 22.919C50.6217 22.5611 50.6979 22.1203 50.7045 21.5966V7.63636ZM78.5007 17.8182C78.5007 20.0852 78.0599 21.9976 77.1783 23.5554C76.2966 25.1065 75.1068 26.2831 73.6087 27.0852C72.1106 27.8807 70.4401 28.2784 68.5973 28.2784C66.7412 28.2784 65.0642 27.8774 63.5661 27.0753C62.0746 26.2666 60.888 25.0866 60.0064 23.5355C59.1314 21.9777 58.6939 20.072 58.6939 17.8182C58.6939 15.5511 59.1314 13.642 60.0064 12.0909C60.888 10.5331 62.0746 9.35653 63.5661 8.56108C65.0642 7.759 66.7412 7.35795 68.5973 7.35795C70.4401 7.35795 72.1106 7.759 73.6087 8.56108C75.1068 9.35653 76.2966 10.5331 77.1783 12.0909C78.0599 13.642 78.5007 15.5511 78.5007 17.8182ZM72.8132 17.8182C72.8132 16.5985 72.6508 15.571 72.326 14.7358C72.0078 13.8939 71.5339 13.2576 70.9041 12.8267C70.281 12.3892 69.5121 12.1705 68.5973 12.1705C67.6825 12.1705 66.9103 12.3892 66.2805 12.8267C65.6574 13.2576 65.1835 13.8939 64.8587 14.7358C64.5405 15.571 64.3814 16.5985 64.3814 17.8182C64.3814 19.0379 64.5405 20.0687 64.8587 20.9105C65.1835 21.7457 65.6574 22.3821 66.2805 22.8196C66.9103 23.2505 67.6825 23.4659 68.5973 23.4659C69.5121 23.4659 70.281 23.2505 70.9041 22.8196C71.5339 22.3821 72.0078 21.7457 72.326 20.9105C72.6508 20.0687 72.8132 19.0379 72.8132 17.8182ZM81.0586 28V7.63636H89.8881C91.4393 7.63636 92.7418 7.84517 93.7958 8.26278C94.8564 8.6804 95.6552 9.27036 96.1921 10.0327C96.7357 10.795 97.0075 11.6932 97.0075 12.7273C97.0075 13.4763 96.8417 14.1591 96.5103 14.7756C96.1855 15.392 95.7281 15.9091 95.1381 16.3267C94.5482 16.7377 93.8588 17.0227 93.07 17.1818V17.3807C93.945 17.4138 94.7404 17.6359 95.4563 18.0469C96.1722 18.4512 96.7423 19.0114 97.1665 19.7273C97.5908 20.4366 97.8029 21.2718 97.8029 22.233C97.8029 23.3466 97.5112 24.3376 96.9279 25.206C96.3512 26.0743 95.5292 26.7571 94.462 27.2543C93.3948 27.7514 92.122 28 90.6438 28H81.0586ZM86.587 23.5852H89.1722C90.1003 23.5852 90.7963 23.4129 91.2603 23.0682C91.7243 22.7169 91.9563 22.1998 91.9563 21.517C91.9563 21.0398 91.8469 20.6354 91.6282 20.304C91.4094 19.9725 91.0979 19.7206 90.6935 19.5483C90.2958 19.3759 89.8152 19.2898 89.2518 19.2898H86.587V23.5852ZM86.587 15.8693H88.854C89.338 15.8693 89.7655 15.7931 90.1367 15.6406C90.5079 15.4882 90.7963 15.2694 91.0018 14.9844C91.2139 14.6927 91.32 14.3381 91.32 13.9205C91.32 13.2907 91.0946 12.8101 90.6438 12.4787C90.1931 12.1406 89.623 11.9716 88.9336 11.9716H86.587V15.8693ZM117.381 7.63636V28H112.767L105.409 17.3011H105.29V28H99.7617V7.63636H104.455L111.694 18.2955H111.853V7.63636H117.381ZM119.996 28V7.63636H134.672V12.0909H125.525V15.5909H133.917V20.0455H125.525V23.5455H134.632V28H119.996ZM143.34 7.63636L146.681 13.5625H146.84L150.221 7.63636H156.386L150.3 17.8182L156.624 28H150.3L146.84 21.9545H146.681L143.221 28H136.937L143.181 17.8182L137.136 7.63636H143.34ZM164.059 28H158.093L164.815 7.63636H172.372L179.093 28H173.127L168.673 13.2443H168.514L164.059 28ZM162.946 19.9659H174.162V24.1023H162.946V19.9659Z"
                  fill="#878889"
                />
              </svg>
            </Link>
          </div>
          <div>
            <ul className="text-[#7C808B] text-lg mt-2 flex gap-3 font-semibold">
              <li>
                <Link href="/" className="hover:text-[#b37af8] transition duration-200 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/govt" className="hover:text-[#b37af8] transition duration-200 ease-in-out">
                  Govt Jobs
                </Link>
              </li>
              <li>
                <Link href="/railway" className="hover:text-[#b37af8] transition duration-200 ease-in-out">Railway Jobs</Link>
              </li>
              <li>
                <Link href="/bank" className="hover:text-[#b37af8] transition duration-200 ease-in-out">Bank Jobs</Link>
              </li>
              <li>
                <Link href="/defence" className="hover:text-[#b37af8] transition duration-200 ease-in-out">Defence Jobs</Link>
              </li>
            </ul>
          </div>
          <div className="pt-1">
            <ul className="text-[#7C808B] mt-2 flex gap-3 font-semibold">
              <li className="border-[1px] rounded border-[#7C808B] p-0.5">
                <Link href="/">
                  <Instagram size={26} />
                </Link>
              </li>
              <li className="border-[1px] rounded border-[#7C808B] p-0.5">
                <Link href="/">
                  <Facebook size={26} />
                </Link>
              </li>
              <li className="border-[1px] rounded border-[#7C808B] p-0.5">
                <Link href="/">
                  <Twitter size={26} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 rounded bg-[#EBEBEB] w-4/5  flex items-center justify-center">
        <h1 className="text-2xl font-black text-black">
          Contact -{" "}
          <span className="underline text-[#7C808B]">
            jobnexa.jobs@gmail.com
          </span>
        </h1>
      </div>
    </div>
  );
}
