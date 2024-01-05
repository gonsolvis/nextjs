"use-client";
import React from "react";
import Countdown from "./Countdown";
import HeartsComp from "./HeartsComp";

const Banner = (props) => {
  console.log("propsBanner", props);
  return (
    <div>
      <div
        id="informational-banner"
        tabindex="-1"
        class=" flex flex-col justify-center items-center w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="flex items-center flex-shrink-0">
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 me-2 text-xs font-medium text-white bg-purple rounded-lg hover:bg-opacity-90 "
          >
            <div class="mb-4 md:mb-0 md:me-4">
              <h2 class="mb-1 text-base font-semibold text-white dark:text-white">
                Countdown
              </h2>
              <p class="flex items-center justify-center  text-sm font-normal text-white dark:text-gray-400">
                {<Countdown countdown={props.countdown} />}
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex flex-col items-center justify-center px-4 py-2 me-2 text-xs font-medium text-white bg-purple rounded-lg hover:bg-opacity-90 "
          >
            <div class="mb-4 md:mb-0 md:me-4 flex flex-col justify-center items-center">
              <h2 class="mb-1 text-base font-semibold text-white dark:text-white">
                Lives
              </h2>
              <p class="flex items-center justify-center  text-sm font-normal text-white dark:text-gray-400">
                <HeartsComp heartsLeft={props.hearts} />
              </p>
            </div>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 me-2 text-xs font-medium text-white bg-purple rounded-lg hover:bg-opacity-90 "
          >
            <div class="mb-4 md:mb-0 md:me-4">
              <h2 class="mb-1 text-base font-semibold text-white dark:text-white">
                Points
              </h2>
              <p class="flex items-center justify-center  text-sm font-normal text-white dark:text-gray-400">
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
