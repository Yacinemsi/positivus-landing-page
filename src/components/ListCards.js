import React from "react";
import Card from "./Card";

const ListCards = () => {
  const cardsData = [
    {
      title1: "Search engine",
      title2: "Optimization",
      imageSrc: "/assets/SEO-illustration.svg",
      classNameExtra: "bg-[#F3F3F3] text-black",
      classNameExtraSpan: "bg-green-light w-fit rounded-lg px-1",
      classNameButton: "",
      classNameFaIcon: "text-green-light bg-black",
      classNameHoverButtonText: "bg-green-light",
    },
    {
      title1: "Pay-per-click",
      title2: "Advertising",
      imageSrc: "/assets/PPCA-illustration.svg",
      classNameExtra: "bg-green-light text-black",
      classNameExtraSpan: "bg-[#F3F3F3] w-fit rounded-lg px-1",
      classNameButton: "",
      classNameFaIcon: "text-green-light bg-black",
      classNameHoverButtonText: "bg-white",
    },
    {
      title1: "Social Media",
      title2: "Marketing",
      imageSrc: "/assets/SMM-illustration.svg",
      classNameExtra: "bg-black text-black",
      classNameExtraSpan: "bg-white w-fit rounded-lg px-1",
      classNameButton: "text-white",
      classNameFaIcon: "text-black bg-white",
      classNameHoverButtonText: "bg-green-light",
    },
    {
      title1: "Email",
      title2: "Marketing",
      imageSrc: "/assets/EM-illustration.svg",
      classNameExtra: "bg-[#F3F3F3] text-black",
      classNameExtraSpan: "bg-green-light w-fit rounded-lg px-1",
      classNameButton: "",
      classNameFaIcon: "text-green-light bg-black",
      classNameHoverButtonText: "bg-green-light",
    },
    {
      title1: "Content",
      title2: "Creation",
      imageSrc: "/assets/CC-illustration.svg",
      classNameExtra: "bg-green-light text-black",
      classNameExtraSpan: "bg-white w-fit rounded-lg px-1",
      classNameButton: "",
      classNameFaIcon: "text-green-light bg-black",
      classNameHoverButtonText: "bg-white",
    },
    {
      title1: "Analytics and",
      title2: "Tracking",
      imageSrc: "/assets/AT-illustration.svg",
      classNameExtra: "bg-black text-black",
      classNameExtraSpan: "bg-white w-fit rounded-lg px-1",
      classNameButton: "text-white",
      classNameFaIcon: "text-black bg-white",
      classNameHoverButtonText: "bg-green-light",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start items-center justify-center md:gap-8 mb-8">
        <h2 className="bg-green-light text-2xl font-medium px-2 rounded-md mb-6">
          <span>Services</span>
        </h2>
        <p className="text-center text-xs mb-8 dark:text-white md:w-3/5 md:text-sm md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default ListCards;
