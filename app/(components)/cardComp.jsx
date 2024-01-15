import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const CardComp = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <FontAwesomeIcon
          icon={faLanguage}
          className="fas faLanguage text-red-500 text-3xl mx-2 my-1"
        /> */}
        <div className=" flex justify-center  w-20">
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-blacker mx-2 my-1"
          />
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Alphabet part-one
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
          Dive into our first lessons. Gain an understanding of the alphabet
          ensuring a strong foundation for language mastery.
        </p>
        <a
          href="/lessons/urdu_alphabet"
          className="inline-flex items-center text-purple    hover:underline"
        >
          See our lesson
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardComp;
