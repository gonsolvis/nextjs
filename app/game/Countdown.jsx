import React, { useState, useEffect } from "react";

function Countdown({ countdown }) {
  const formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="">
      <p>{formatTime(countdown)}</p>
    </div>
  );
}

export default Countdown;
