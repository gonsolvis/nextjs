import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
const SkeletonGameCardThree = () => {
  return (
    <div className="h-screen flex flex-row justify-evenly  bg-gray-300">
      <div className="flex flex-col justify-center pt-2 pb-2 mr-2 ">
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <svg
            className="  w-32 h-32 md:w-52 md:h-52   lg:w-64 lg:h-64 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/chess-bishop.svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="  flex items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse  md:flex md:items-center">
        <div
          role="status"
          className=" flex flex-col justify-between space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className=" flex flex-col justify-center items-center w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="  w-32 h-32 md:w-52 md:h-52   lg:w-64 lg:h-64  text-gray-200 dark:text-gray-600 "
              aria-hidden="true"
              xmlns="https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/chess-bishop.svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
            <svg
              className="  w-32 h-32 md:w-52 md:h-52   lg:w-64 lg:h-64 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/chess-bishop.svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
            <svg
              className="  w-32 h-32 md:w-52 md:h-52   lg:w-64 lg:h-64 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/chess-bishop.svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonGameCardThree;
