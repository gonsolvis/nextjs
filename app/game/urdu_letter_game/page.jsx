"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LeftCard from "@/app/game/LeftCard";
import RightCard from "@/app/game/RightCard";
import SkeletonGameCardThree from "../SkeletonGameCardThree";
import Banner from "../Banner";
import GameOverModal from "../GameOverModal";
import LeaderBoard from "../LeaderBoard";

const UrduLetterGame = () => {
  const [data, setData] = useState(null);
  const [randomCards, setRandomCards] = useState([]);
  const [randomNumberFromCardAmount, setRandomNumberFromCardAmount] =
    useState(0);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(45);
  const [hearts, setHearts] = useState(5);
  const [shake, setShake] = useState(false);
  const [textBigger, setTextBigger] = useState(false);

  const getLetters = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/UrduLetters", {
        cache: "no-store",
      });

      if (!res.status === 200) {
        throw new Error("Failed to fetch letters");
      }

      setData(res.data);
    } catch (error) {
      console.log("Error loading letters: ", error);
    }
  };

  useEffect(() => {
    getLetters();
  }, []);

  function createCards() {
    let cards;
    if (data) {
      cards = data.tickets;
    }

    if (!cards) {
      return;
    }

    const AMOUNT_OF_CARDS = 3;
    const newArrayOfNumbers = [];
    console.log("newArrayOfNumbers", newArrayOfNumbers);
    while (newArrayOfNumbers.length < AMOUNT_OF_CARDS) {
      const randomNumber = Math.floor(Math.random() * cards?.length);

      if (!newArrayOfNumbers.includes(randomNumber)) {
        newArrayOfNumbers.push(randomNumber);
      }
    }

    setRandomCards(newArrayOfNumbers.map((number) => cards[number]));
    setRandomNumberFromCardAmount(Math.floor(Math.random() * AMOUNT_OF_CARDS));
  }
  useEffect(() => {
    if (data) {
      createCards();
    }
  }, [data]);

  function ChecksIfMatchOnClick(card) {
    let leftCard = randomCards[randomNumberFromCardAmount]._id;

    if (leftCard === card) {
      console.log("MATCH");
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setTextBigger(true);

      setTimeout(() => {
        setTextBigger(false);
      }, 1000);
      // console.log(score);
      createCards();
    } else {
      // console.log("WRONG");
      setShake(true); // Set the shake state to true for the mismatch

      setTimeout(() => {
        setShake(false);
      }, 1000);

      setHearts((prevScore) => prevScore - 1); // Decrease the score by 1

      // console.log(score);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  function restartGame() {
    setHearts(5);
    setScore(0);
    setCountdown(45);
    createCards();
  }

  return (
    <>
      {data ? (
        <div className="flex flex-col justify-start relative ">
          <div>
            {(!countdown || !hearts) && (
              <GameOverModal
                countdown={countdown}
                hearts={hearts}
                score={score}
                restartGame={() => restartGame()}
                language={"urdu"}
              />
            )}
          </div>

          <div>
            <Banner
              score={score}
              countdown={countdown}
              hearts={hearts}
              textBigger={textBigger}
            />
          </div>
          <div className="flex flex-row justify-end ">
            <div className="bg-my-background bg-center bg-no-repeat bg-cover  flex flex-row justify-around  w-screen ">
              <LeftCard leftcard={randomCards[randomNumberFromCardAmount]} />
              <RightCard
                rightcard={randomCards}
                ChecksIfMatchOnClick={(card) => ChecksIfMatchOnClick(card)}
                shake={shake}
              />
            </div>
            <div className="hidden sm:block">
              <LeaderBoard />
            </div>
          </div>
          <div className=" md:hidden ">
            <LeaderBoard />
          </div>
        </div>
      ) : (
        <SkeletonGameCardThree />
      )}
    </>
  );
};

export default UrduLetterGame;
