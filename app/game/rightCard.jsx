import React from "react";
import SkeletonGameCardThree from "./SkeletonGameCardThree";

const RightCard = (props) => {
  console.log("rightcard", props);

  const handleCardClick = (card) => {
    props.ChecksIfMatchOnClick(card);
  };

  return (
    <div className="flex flex-col pt-2 pb-2 mr-2 border border-dotted border-indigo-600">
      {props.rightcard.map((card, index) => (
        <a
          key={index}
          href="#"
          className="block mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          onClick={() => handleCardClick(card._id)}
        >
          {/* <h5 className="mx-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card._id}
          </h5> */}
          <p className=" flex justify-center font-normal text-2xl text-gray-700 dark:text-gray-400">
            {card.urduLetter}
          </p>
        </a>
      ))}
    </div>
  );
};

export default RightCard;
