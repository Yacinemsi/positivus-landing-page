// @ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  title,
  titleColor,
  imageSrc,
  backgroundColor,
  textColor,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className="border-b-4 border-black rounded-[28px]"
      style={{
        backgroundColor: backgroundColor || "white",
        color: textColor || "black",
      }}
    >
      <div
        className={`grid grid-cols-2 grid-rows-2 gap-0 p-6 h-64 rounded-3xl border-solid border-1 border-black`}
      >
        {/* DIV 1: Title spans across two columns */}
        <div
          className="col-span-2 row-span-1 flex items-center md:col-span-1"
          style={{ color: titleColor || "inherit" }}
        >
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        {/* DIV 2: Button with icon */}
        <div className="flex items-center gap-2 col-span-1 row-start-2 md:col-span-1">
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <button
            className={`font-medium text-sm`}
            style={{
              color: textColor || "black",
            }}
          >
            {buttonText || "Learn more"}
          </button>
        </div>

        {/* DIV 3: Image */}
        {imageSrc && (
          <div className="flex justify-end col-span-1 row-start-2 md:col-start-2 md:row-span-2">
            <img src={imageSrc} alt={title} className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
