import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const LeaderBoard = () => {
  const [data, setData] = useState(null);
  const [fullname, setFullName] = useState(null);
  const [isName, setIsName] = useState(false);

  const getScores = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/UserScores", {
        cache: "no-store",
      });

      if (!res.status === 200) {
        throw new Error("Failed to fetch score");
      }
      console.log("Heyyyy i res orking", res);
      console.log("Heyyyy i res.data orking", res.data);
      setData(res.data);
    } catch (error) {
      console.log("Error loading score: ", error);
    }
  };

  useEffect(() => {
    getScores();
  }, []);

  const USER_SCORES = data?.scores;
  //   console.log("Heyyyy i data orking", USER_SCORES[2].score);

  const sortedNumbers = USER_SCORES?.sort((a, b) => b.score - a.score);

  console.log("sortedNumbers", sortedNumbers);

  const getRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      console.log("response", response);
      const data = await response.json();
      console.error("Error fetching random user:", data);
      const firstname = data?.results[0]?.name?.first;
      const surname = data?.results[0]?.name?.last;
      setFullName(`${firstname} ${surname}`);
      console.log(fullname);
      return fullname;
    } catch (error) {
      console.error("Error fetching random user:", error);
      return null;
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  console.log(fullname);

  return (
    <div className=" h-screen overflow-scroll  shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900"></div>
      <table className=" w-48 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Score</th>
            <th className="px-4 py-4">Lives</th>
          </tr>
        </thead>
        <tbody>
          {sortedNumbers?.map((score, index) => (
            //   {
            //     console.log("what?", data?.scores);
            //   }
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="flex items-center justify-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://i.pravatar.cc/300?${index}`}
                  alt="User avatar"
                />
                <div className="ps-6">
                  <div className=" px-4 mx-4 first-line:text-base font-semibold">
                    {fullname}
                  </div>
                  <div className="font-normal text-gray-500">neil.sims</div>
                </div>
              </th>
              <td className="px-2 py-4"> {score.score}</td>
              <td className="px-2 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  {score.lives}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
