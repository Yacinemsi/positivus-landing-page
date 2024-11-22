import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CaseStudieCard = ({ text }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Texte dynamique */}
      <p className="text-white text-xs font-extralight dark:text-black">
        {text}
      </p>

      {/* Bouton et icône */}
      <div className="flex justify-start items-center gap-2 group">
        <button className="relative group text-green-light text-sm font-extralight dark:text-black overflow-hidden">
          <span className="relative z-10 group-hover:text-black">
            Learn more
          </span>
          <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
        </button>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="w-5 h-5 z-0 -rotate-30 text-green-light group-hover:scale-125 transition-transform duration-300 ease-in-out dark:text-black"
        />
      </div>
    </div>
  );
};

export default CaseStudieCard;
