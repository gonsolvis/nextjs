"use client";
import React from "react";
import { useState, useEffect } from "react";
import LeftCard from "./leftCard";
import RightCard from "./rightCard";
import axios from "axios";
import SkeletonGameCardThree from "./SkeletonGameCardThree";
import Banner from "./Banner";

const UrduLetterGame = () => {
  const [data, setData] = useState(null);
  const [randomCards, setRandomCards] = useState([]);
  const [randomNumberFromCardAmount, setRandomNumberFromCardAmount] =
    useState(0);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(45);
  const [hearts, setHearts] = useState(5);

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
    console.log("setRandomCards", randomCards);
  }
  useEffect(() => {
    if (data) {
      createCards();
    }
  }, [data]);

  function ChecksIfMatchOnClick(card) {
    let leftCard = randomCards[randomNumberFromCardAmount]._id;
    console.log("Card clicked:", card);
    console.log("Card leftCard:", leftCard);

    if (leftCard === card) {
      console.log("MATCH");
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      console.log(score);
      createCards();
    } else {
      console.log("WRONG");
      setHearts((prevScore) => prevScore - 1); // Decrease the score by 1
      setScore((prevScore) => prevScore + 1); // Increase the score by 1

      console.log(score);
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
        <div className=" flex flex-col justify-evenly border border-dotted border-yellow-300">
          <div>
            {" "}
            <Banner score={score} countdown={countdown} hearts={hearts} />
          </div>
          <div className="flex flex-row justify-evenly">
            <LeftCard leftcard={randomCards[randomNumberFromCardAmount]} />
            <RightCard
              rightcard={randomCards}
              ChecksIfMatchOnClick={(card) => ChecksIfMatchOnClick(card)}
            />
          </div>
        </div>
      ) : (
        <SkeletonGameCardThree />
      )}
    </>
  );
};

export default UrduLetterGame;
