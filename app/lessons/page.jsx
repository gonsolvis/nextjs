import React from "react";
import CardComp from "../(components)/cardComp";

const lessonsLandingPage = () => {
  return (
    <div className="bg-lessons-background bg-center bg-no-repeat bg-cover  flex justify-around items-center h-screen">
      <div className="p-8">
        <CardComp />
      </div>
    </div>
  );
};

export default lessonsLandingPage;
