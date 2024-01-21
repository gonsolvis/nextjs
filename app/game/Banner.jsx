"use-client";
import React from "react";
import Countdown from "./Countdown";
import HeartsComp from "./HeartsComp";

const Banner = (props) => {
  return (
    <div>
      <div
        id="informational-banner"
        tabindex="-1"
        className=" flex flex-col justify-center items-center w-full p-4 border-b border-gray-200 md:flex-row bg-purple dark:bg-gray-700 dark:border-gray-600"
      >
        <div className="flex items-center flex-shrink-0">
          <a
            href="#"
            className="flex flex-col items-center justify-center px-4 py-2 me-2 text-xs font-medium text-blacker  bg-gray-50 rounded-lg hover:bg-opacity-90 "
          >
            <div className="mb-4 md:mb-0 md:me-4">
              <h2 className="mb-1 text-base font-semibold text-blacker dark:text-blacker">
                Countdown
              </h2>
              <p className="flex items-center justify-center  text-sm font-normal text-blacker dark:text-gray-400">
                {<Countdown countdown={props.countdown} />}
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex flex-col items-center justify-center px-4 py-2 me-2 text-xs font-medium text-blacker  bg-gray-50 rounded-lg hover:bg-opacity-90 "
          >
            <div className="mb-4 md:mb-0  flex-col justify-center items-center">
              <h2 className="mb-1 text-base font-semibold text-blacker dark:text-blacker text-center">
                Lives
              </h2>
              <p className="flex items-center justify-center  text-sm font-normal text-blacker dark:text-gray-400">
                <HeartsComp heartsLeft={props.hearts} />
              </p>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 me-2 text-xs font-medium text-blacker  bg-gray-50 rounded-lg hover:bg-opacity-90  "
          >
            <div className="mb-4 md:mb-0 md:me-4">
              <h2 className="mb-1 text-base font-semibold text-blacker dark:text-blacker">
                Points
              </h2>
              <p
                className={` ${
                  props.textBigger ? "font-normal" : "font-bold"
                }  flex items-center justify-center   text-blacker dark:text-gray-400`}
              >
                {props.score}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
