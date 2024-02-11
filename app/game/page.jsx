import React from "react";
import CardComp from "../(components)/cardComp";
import GAMES_OVERAL_CARDS from "../data/GAMES_OVERAL_CARDS";

const page = () => {
  return (
    <div className="bg-lessons-background bg-center bg-no-repeat bg-cover  flex justify-around items-center h-screen">
      <div className="p-8">
        {GAMES_OVERAL_CARDS?.map((lesson, index) => (
          <div key={index} className="mx-2 my-2">
            <CardComp
              title={lesson?.game.title}
              description={lesson?.game.description}
              link={lesson?.game.link}
              link_info={lesson?.game.link_info}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
