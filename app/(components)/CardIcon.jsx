import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const CardIcon = (props) => {
  console.log("propsdeecardcomp", props);
  return (
    <div className=" flex justify-center  w-20">
      {props.link_info == "See game" ? (
        <FontAwesomeIcon icon={faTrophy} className="text-blacker mx-2 my-1" />
      ) : (
        <FontAwesomeIcon icon={faLanguage} className="text-blacker mx-2 my-1" />
      )}{" "}
    </div>
  );
};

export default CardIcon;
