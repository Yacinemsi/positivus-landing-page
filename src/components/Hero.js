import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const illustrations = [
    {
      src: "/assets/illustration.svg",
      alt: "illustration d'un haut-parleur (light mobile)",
      className: "md:hidden dark:hidden place-self-center max-w-72",
    },
    {
      src: "/assets/dark-illustration.svg",
      alt: "illustration d'un haut-parleur (dark mobile)",
      className:
        "md:hidden hidden dark:md:hidden dark:block place-self-center max-w-72",
    },
    {
      src: "/assets/illustration.svg",
      alt: "illustration d'un haut-parleur (light desktop)",
      className: "hidden md:block dark:hidden",
    },
    {
      src: "/assets/dark-illustration.svg",
      alt: "illustration d'un haut-parleur (dark desktop)",
      className: "hidden dark:md:block md:w-full",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-3 md:gap-8">
        <h1 className="text-3xl/tight xl:text-6xl/tight lg:text-5xl/tight md:text-4xl/tight font-medium dark:text-white">
          Navigating the
          <br /> digital landscape
          <br /> for success
        </h1>
        {illustrations.slice(0, 2).map((illustration, index) => (
          <img
            key={index}
            src={illustration.src}
            alt={illustration.alt}
            className={illustration.className}
          />
        ))}
        <p className="text-sm md:text-lg dark:text-white mx-auto md:mr-10">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <CustomButton
          text="Book a consultation"
          classNameDiv="dark:hover:border-b-white w-full max-w-80 md:w-52 place-self-center md:place-self-start"
          classNameButton="w-full hover:text-black  mt-4 bg-black text-white dark:bg-white dark:text-black"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        {illustrations.slice(2).map((illustration, index) => (
          <img
            key={index + 2}
            src={illustration.src}
            alt={illustration.alt}
            className={illustration.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
