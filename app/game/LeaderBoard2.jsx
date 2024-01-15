import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const LeaderBoard2 = () => {
  const [data, setData] = useState(null);
  const getRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5000");
      return console.log("response", response);
      // const data = await response.json();
      // console.error("Error fetching random user:", data);
      // const firstname = data?.results[0]?.name?.first;
      // // const surname = data?.results[0]?.name?.last;
      // setFullName(`${firstname} ${surname}`);
      // console.log(fullname);
      // return fullname;
    } catch (error) {
      console.error("Error fetching random user:", error);
      return null;
    }
  };
  getRandomUser();
  return <div></div>;
};

export default LeaderBoard2;
