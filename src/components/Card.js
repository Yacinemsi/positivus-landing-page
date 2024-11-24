// @ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  title1,
  title2,
  imageSrc,
  buttonText = "Learn more",
  classNameExtra = "",
  classNameExtraSpan = "",
  classNameButton = "",
  classNameFaIcon = "",
  classNameHoverButtonText = "",
}) => {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 gap-0 shadow-box dark:shadow-boxWhite py-6 px-8 h-52 rounded-3xl border-solid border-1 border-black ${classNameExtra}`}
    >
      {/* Title */}
      <div className="col-span-2 md:col-span-1 row-span-1 flex items-center">
        <h3 className="text-lg font-medium flex flex-col">
          <span className={`${classNameExtraSpan}`}>{title1}</span>
          <span className={`${classNameExtraSpan}`}>{title2}</span>
        </h3>
      </div>

      {/* Button with Icon */}
      <div className="z-0 flex items-end gap-2 col-span-1 row-start-2">
        <button
          className={`text-sm md:flex justify-center items-center gap-3 group relative ${classNameButton}`}
        >
          {/* Icône FontAwesome sans remplissage */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`h-6 w-6 p-1 z-0 rounded-full -rotate-30 group-hover:scale-110 transition-transform duration-300 ease-in-out ${classNameFaIcon}`}
          />

          {/* Texte avec effet de remplissage */}
          <span className="hidden md:block relative overflow-hidden">
            <span className="relative z-10 group-hover:text-black">
              {buttonText}
            </span>
            <span
              className={`absolute inset-0 ${classNameHoverButtonText} transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0`}
            ></span>
          </span>
        </button>
      </div>

      {/* Image */}
      {imageSrc && (
        <div className="flex justify-end md:justify-end md:items-center items-end col-span-1 row-start-2 md:col-start-2 md:row-span-2">
          <img src={imageSrc} alt={title1 + title2} className="w-40" />
        </div>
      )}
    </div>
  );
};

export default Card;
