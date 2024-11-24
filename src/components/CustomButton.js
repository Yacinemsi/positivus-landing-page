import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({
  text = "Click me", // Texte par défaut
  onClick = () => {}, // Fonction à appeler au clic
  classNameButton = "",
}) => {
  return (
    <button
      className={`dark:hover:text-black rounded-xl border-black border-1 px-4 py-3  hover:bg-green-light hover:shadow-box transition-all duration-200 dark:hover:shadow-boxWhite ${classNameButton}`}
      onClick={onClick}
    >
      <Link to="/">{text}</Link>
    </button>
  );
};

export default CustomButton;
