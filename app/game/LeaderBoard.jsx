import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const LeaderBoard = () => {
  const [realData, setRealData] = useState(null);
  const [fakeNameArr, setFakeNameArr] = useState(false);

  const getRandomUser = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=25", {
        // cache: "no-store",
      });

      if (!res.status === 200) {
        throw new Error("Failed to fetch letters");
      }

      setFakeNameArr(res?.data?.results);
    } catch (error) {
      console.log("Error loading letters: ", error);
    }
  };

  const getScores = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/UserScores", {
        cache: "no-store",
      });

      if (!res.status === 200) {
        throw new Error("Failed to fetch score");
      }
      console.log("res.data", res?.data);
      setRealData(res.data);
    } catch (error) {
      console.log("Error loading score: ", error);
    }
  };

  const orderedScores = realData?.scores?.sort((a, b) => b.score - a.score);

  useEffect(() => {
    getScores();
    getRandomUser();
  }, []);

  return (
    <div className=" h-screen overflow-scroll  shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900"></div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-2"> </th> {/* Empty header for image */}
            <th className="px-4 py-2"></th> {/* Empty header for image */}
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Lives</th>
          </tr>
        </thead>

        <tbody>
          {orderedScores?.slice(0, 20).map((i, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className=" py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  {index + 1}
                </div>
              </td>
              <td className="flex items-center justify-center px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 mx-4 rounded-full"
                  src={i.image ? i.image : `https://i.pravatar.cc/300?${index}`}
                  alt="User avatar"
                />
              </td>
              <td className="px-4 py-2">
                {/* <div className="font-semibold">
                  {`${fakeNameArr[index]?.name?.first || "John"}x
                   ${fakeNameArr[index]?.name?.last || "Doe"}`}
                </div> */}
                <div className="font-semibold">
                {i.name}
                </div> 
              </td>
              <td className="px-4 py-2">{i.score}</td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  {i.lives}
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
