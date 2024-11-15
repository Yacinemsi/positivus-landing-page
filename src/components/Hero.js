import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-20">
      <div className="flex-1 flex flex-col gap-3 md:gap-8">
        <h1 className="text-3xl md:text-6xl font-medium dark:text-white">
          Navigating the digital landscape for success
        </h1>
        <img
          src="/assets/illustration.svg"
          alt="illustration d'un haut-parleur"
          className="md:hidden dark:hidden"
        />
        <img
          src="/assets/dark-illustration.svg"
          alt="illustration d'un haut-parleur"
          className="md:hidden hidden dark:md:hidden dark:block"
        />
        <p className="text-sm md:text-lg dark:text-white mr-10">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <CustomButton
          text="Book a consultation"
          classNameDiv="dark:hover:border-b-white md:w-2/5"
          classNameButton="w-full hover:text-black  mt-4 bg-black text-white dark:bg-white dark:text-black "
        />
      </div>
      <div className="flex-1">
        <img
          src="/assets/illustration.svg"
          alt="illustration d'un haut-parleur"
          className="hidden md:block dark:hidden"
        />
        <img
          src="/assets/dark-illustration.svg"
          alt="illustration d'un haut-parleur"
          className="hidden dark:md:block md:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
