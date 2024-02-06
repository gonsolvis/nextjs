"use client";
import React from "react";
import Link from "next/link";

const RightCard = (props) => {
  console.log("rightcard", props);

  const handleCardClick = (card) => {
    props.ChecksIfMatchOnClick(card);
  };

  return (
    <div className=" flex flex-col justify-evenly pt-2 pb-2 mr-2 ">
      {props?.rightcard?.map((card, index) => (
        <Link
          scroll={false}
          key={index}
          href="#"
          className={` ${
            props.shake && "animate-bounce "
          } mb-4 w-28 h-28 md:w-36 md:h-36 lg:w-56 lg:h-56 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center justify-center`}
          onClick={() => handleCardClick(card._id)}
        >
          <p className=" flex justify-center font-normal  text-gray-700 dark:text-gray-400 text-5xl md:text-5xl   lg: ">
            {card.urduLetter ? card.urduLetter : card.hindiLetter}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default RightCard;
