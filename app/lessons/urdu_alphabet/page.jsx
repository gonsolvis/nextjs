import React from "react";
import Link from "next/link";
import Table from "../../(components)/table";
import SkeletonTable from "../SkeletonTable";

const getLetters = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/UrduLetters`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const urdu_alphabet = async () => {
  const data = await getLetters();
  const Letters = data?.tickets;

  return (
    <div className="h-full flex justify-center items-center overflow-y-auto">
      <div className=" p-8 rounded-lg text-black">
        <h1 className="text-3xl  mb-4">Lesson Oneeeeeeee: Urdu Letters</h1>

        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-justify">Introduction</h2>
          <p>
            Welcome to Lesson One of learning Urdu letters! In this lesson,
            we&apos;ll start with the basics and explore the foundation of Urdu
            script.
          </p>
        </div>

        <div className="mb-6 text-justify">
          <h2 className="text-2xl mb-2">Urdu Alphabets</h2>
          <p>
            The Urdu script encompasses 39 characters, including 37 core letters
            and 2 additional characters, such as &apos;TayD,&apos;
&apos; &apos;
&apos;RayD,&apos;
&apos; &apos;
&apos;Choti Yeh,&apos;
&apos;
            and &apos;
&apos;HeD,&apos;
&apos; which are used in specific contexts or loanwords. Let&apos;
&apos;s
            start by familiarizing ourselves with the basic letters. 
          </p>

          {Letters ? <Table Letters={Letters} /> : <SkeletonTable />}
        </div>

        <div>
          <h2 className="text-2xl  mb-2">Practice Exercises</h2>
          <p className=" text-justify">
            Practice makes perfect! Use the interactive exercises{" "}
            <span className=" font-bold text-purple">
              <Link href={`/game/urdu_letter_game`}>here</Link>
            </span>{" "}
            to reinforce your understanding of Urdu letters.
          </p>
        </div>
      </div>
    </div>
  );
};
export default urdu_alphabet;
