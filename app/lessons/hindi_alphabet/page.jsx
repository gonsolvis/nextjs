import React from "react";
import Link from "next/link";
import Table from "../../(components)/table";
import SkeletonTable from "../SkeletonTable";

const getLetters = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/HindiLetters", {
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

const hindi_alphabet = async () => {
  const data = await getLetters();
  const Letters = data?.tickets[0].letters;

  return (
    <div className="h-full flex justify-center items-center overflow-y-auto">
      <div className=" p-8 rounded-lg text-black">
        <h1 className="text-3xl  mb-4">Hindi Letters</h1>

        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-justify">Introduction</h2>
          <p className="text-justify">
            Devanagari, originating from the ancient Brahmi script, is linked to
            Sanskrit. Primarily used for Hindi and Marathi, it extends to
            languages like Sanskrit, Konkani, and Nepali. As an abugida, it
            features consonants with inherent vowel sounds, modified by
            diacritics. The script includes consonants categorized by
            articulation and vowels written independently or as diacritics.
            Devanagari also encompasses numerals, commonly used in Hindi, and is
            written from left to right with a distinctive horizontal line at the
            top.
          </p>
        </div>

        <div className="mb-6 text-justify">
          <h2 className="text-2xl mb-2">Consonants</h2>
          <p className="text-justify">
            Hindi comprises 36 consonants, categorized by their place and manner
            of articulation. Velar consonants include क (ka) and ग (ga), palatal
            ones involve च (cha) and ज (ja), and cerebral ones feature ट (ṭa)
            and ड (ḍa). Dental consonants encompass त (ta) and द (da), while
            labials include प (pa) and ब (ba). Semi-vowels like य (ya) and र
            (ra) and sibilants like श (sha) and स (sa) contribute to the diverse
            sound system. These consonants, combined with vowels, form the
            essential building blocks of the Hindi language.
          </p>

          {Letters ? <Table Letters={Letters} /> : <SkeletonTable />}
        </div>

        <div>
          <h2 className="text-2xl  mb-2">Practice Exercises</h2>
          <p className=" text-justify">
            Practice makes perfect! Use the interactive exercises{" "}
            <span className=" font-bold text-purple">
              <Link href={`/game`}>here</Link>
            </span>{" "}
            to reinforce your understanding of Urdu letters.
          </p>
        </div>
      </div>
    </div>
  );
};
export default hindi_alphabet;
