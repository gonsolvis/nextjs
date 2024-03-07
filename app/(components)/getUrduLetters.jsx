import React from "react";

const getUrduLetters = () => {
  const getLetters = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/UrduLetters`, {
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
    console.log("data", data.tickets);
    const Letters = data.tickets;
  };
  console.log("getUrduLetters", Letters);
  return <div>getUrduLetters</div>;
};

export default getUrduLetters;
