"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import urdulogo from "@/public/Urdulogo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { data: session } = useSession({
    required: false,
  });

  return (
    <nav className="bg-whiter border-b-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={urdulogo}
            alt="Scriptlit logo"
            width={40}
            height={40}
          />

          <span className=" text-blacker self-center text-1xl font-semibold whitespace-nowrap ">
            ScriptLit
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-whiter dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center ">
              <Link
                href="/"
                className="block py-4 px-3 text-white bg-lesspurple rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center ">
              <Link
                onClick={toggleMenu}
                href="/lessons"
                className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Lessons
              </Link>
            </li>
            <li className="flex items-center ">
              <Link
                onClick={toggleMenu}
                href="/game"
                className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Games
              </Link>
            </li>
            {/*     <li className="flex items-center ">
              <Link
                onClick={toggleMenu}
                href="/sign_up"
                className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sign up
              </Link>
            </li> */}
            <li className="flex items-center ">
              <Link
                onClick={toggleMenu}
                href="#"
                className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li className="flex flex-row items-center ">
              {session ? (
                <>
                  <Link
                    onClick={toggleMenu}
                    href="/api/auth/signout?callbackUrl=/"
                    className="block py-4 px-3 text-gray-900 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0 dark:text-white
                  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Log out
                  </Link>
                  <Image
                    className="mx-4 rounded-full"
                    src={session?.user?.image}
                    alt="User avatar"
                    width={40}
                    height={40}
                  />
                </>
              ) : (
                <Link
                  onClick={toggleMenu}
                  href="/api/auth/signin/"
                  className="block py-4 px-3 text-gray-900 rounded
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0
                  md:hover:text-blue-700 md:p-0 dark:text-white
                  md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Log in
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
