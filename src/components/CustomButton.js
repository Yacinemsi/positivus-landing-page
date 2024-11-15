import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({
  text = "Click me", // Texte par défaut
  onClick = () => {}, // Fonction à appeler au clic
  classNameDiv = "", // Classes supplémentaires personnalisables
  classNameButton = "",
}) => {
  return (
    <div
      className={`hover:border-b-black dark:hover:border-b-white border-b-transparent border-b-4 rounded-[15px] transition-all duration-200 ${classNameDiv}`}
    >
      <button
        className={`dark:border-white dark:hover:text-black rounded-xl border-black border-1 px-4 py-3 dark:hover:bg-green-light hover:bg-green-light ${classNameButton}`}
        onClick={onClick}
      >
        <Link to="/">{text}</Link>
      </button>
    </div>
  );
};

export default CustomButton;
