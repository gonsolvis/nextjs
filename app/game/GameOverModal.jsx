"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const GameOver = (props) => {
  console.log("GameOverprops", props);
  const [scorePosted, setScorePosted] = useState(false);

  const startingPlaceholderData = {
    score: props.score,
    lives: props.hearts,
  };
  const [scoreData, setScoreData] = useState(startingPlaceholderData);

  useEffect(() => {
    if (!scorePosted && props.score !== 0 && props.hearts !== 5) {
      handleSubmit(); // Call handleSubmit immediately
    } 
  }, [scorePosted]);

  const handleSubmit = async (e) => {
    const res = await fetch("/api/UserScores", {
      method: "POST",
      body: JSON.stringify({ scoreData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to post scores");
    }
    setScorePosted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 1H1m14 18H1m2 0v-4.333a2 2 0 0 1 .4-1.2L5.55 10.6a1 1 0 0 0 0-1.2L3.4 6.533a2 2 0 0 1-.4-1.2V1h10v4.333a2 2 0 0 1-.4 1.2L10.45 9.4a1 1 0 0 0 0 1.2l2.15 2.867a2 2 0 0 1 .4 1.2V19H3Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {(!props.hearts && (
              <>
                You have run out of lives! Your total score was
                <span className="font-bold"> {props.score}</span>
              </>
            )) ||
              (!props.countdown && (
                <>
                  Your time is up! Your total score was
                  <span className="font-bold"> {props.score}</span>
                </>
              ))}
          </h3>
          <button
            data-modal-hide="popup-modal"
            type="button"
            className="text-white bg-purple hover:bg-lesspurple focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
            onClick={props.restartGame}
          >
            Want to play again?
          </button>
          <Link href="/lessons/urdu_alphabet">
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Study more?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
