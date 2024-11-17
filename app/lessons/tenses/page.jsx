import React from "react";
import CardComp from "@/app/(components)/cardComp";
import TENSES_OVERALL_CARD from "@/app/data/TENSES_OVERALL_CARD"


const tensesLandingPage = () => {
  return (
    <div className="bg-lessons-background bg-center bg-no-repeat bg-cover  flex justify-around items-center h-screen">
      <div className="p-8">
        {TENSES_OVERALL_CARD?.map((lesson, index) => (
          <div key={index} className="mx-2 my-2  ">
            <CardComp
              title={lesson?.lesson?.title}
              description={lesson?.lesson?.description}
              link={lesson?.lesson?.link}
              link_info={lesson?.lesson?.link_info}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default tensesLandingPage;
