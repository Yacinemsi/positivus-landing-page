import React, { useState } from "react";

const ToggleAccordion = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen((prevState) => !prevState);
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false); // Permet de réactiver le toggle après l'animation
  };

  return (
    <div className="border-b-4 border-b-black rounded-[30px] dark:border-white">
      <div
        className={`rounded-4xl border-1 border-black dark:border-black p-4 md:p-8 cursor-pointer transition-colors duration-300 ${
          isOpen ? "bg-green-light" : "bg-gray-100 "
        }`}
        onClick={handleToggle}
      >
        <summary className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl md:text-4xl font-semibold md:w-20 w-8 text-black">
              {number}
            </span>
            <h3 className="text-sm md:text-xl font-normal  w-[172px] md:w-full text-black">
              {title}
            </h3>
          </div>
          {/* Symbole avec transition */}

          <span
            className={`flex items-center bg-gray-100 justify-center md:w-11 max-w-10 text-2xl md:text-4xl font-bold text-black w-full rounded-full border-1 border-black transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <span style={{ transform: "translateY(-3px)" }}>-</span>
            ) : (
              "+"
            )}
          </span>
        </summary>
        {/* Contenu avec transition */}
        <div
          className={`overflow-hidden transition-[max-height] duration-400 ease ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <hr className="mt-6 border-t-1 border-black" />
          <div className="mt-4 text-xs md:text-sm text-black">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ToggleAccordion;
