import React from "react";

const CardTeam = ({ name, title, image, description }) => {
  return (
    <div className="shadow-box dark:shadow-boxWhite hover:shadow-boxGreen flex flex-col border-1 border-black dark:border-white p-8 rounded-4xl gap-4 bg-white dark:bg-dark md:max-w-[355px] h-auto ">
      <div className="relative flex items-end gap-4 dark:text-white">
        <img src={image} alt={name} className="w-20" />
        <div>
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-xs font-light">{title}</p>
        </div>
        <img
          src="/assets/icon-linkedin.svg"
          alt="icon linkedin"
          className="w-6 absolute top-0 right-0"
        />
      </div>
      <hr className="h-1 border-black dark:border-white" />
      <div>
        <p className="text-xs font-light dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardTeam;
