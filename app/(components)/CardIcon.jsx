"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const CardIcon = () => {
  const pathname = usePathname();

  return (
    <div className=" flex justify-center  w-20">
      {pathname === "/game" ? (
        <FontAwesomeIcon
          icon={faTrophy}
          className="text-blacker mx-2 my-1 w-4 h-4"
        />
      ) : (
        <FontAwesomeIcon
          icon={faLanguage}
          className="text-blacker mx-2 my-1 w-4 h-4"
        />
      )}
    </div>
  );
};

export default CardIcon;
