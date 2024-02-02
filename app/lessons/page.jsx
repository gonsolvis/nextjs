import React from "react";
import CardComp from "../(components)/cardComp";
import LESSONS_OVERALL_CARD from "../data/LESSONS_OVERALL_CARD";

const lessonsLandingPage = () => {
  return (
    <div className="bg-lessons-background bg-center bg-no-repeat bg-cover  flex justify-around items-center h-screen">
      <div className="p-8">
        {LESSONS_OVERALL_CARD.map((lesson, index) => (
          <div key={index} className="mx-2 my-2">
            <CardComp
              title={lesson.lesson.title}
              description={lesson.lesson.description}
              link={lesson.lesson.link}
              link_info={lesson.lesson.link_info}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default lessonsLandingPage;
