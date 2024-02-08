import React from "react";
import Link from "next/link";

const LeftCard = (props) => {
  return (
    <div className="flex flex-col justify-center item-center pt-2 pb-2 mr-2">
      <Link
        href="#"
        className="mb-4 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-32 h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 flex items-center justify-center"
      >
        <p className=" font-normal text-center text-gray-700 dark:text-gray-400 text-xl md:text-2xl ">
          {props?.leftcard?.romanLetter}
        </p>
      </Link>
    </div>
  );
};

export default LeftCard;
