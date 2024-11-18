import React from "react";
import Card from "./Card";

const ListCards = () => {
  const cardsData = [
    {
      title: "Search engine optimization",
      titleColor: "#B9FF66",
      imageSrc: "/assets/SEO-illustration.svg",
      backgroundColor: "#F9FAFB",
      textColor: "black",
      buttonText: "Learn more",
      buttonColor: "#000000",
    },
    {
      title: "Pay-per-click advertising",
      titleColor: "#000000",
      imageSrc: "/assets/PPCA-illustration.svg",
      backgroundColor: "#B9FF66",
      textColor: "black",
      buttonText: "Learn more",
      buttonColor: "#FFFFFF",
    },
    {
      title: "Social Media Marketing",
      titleColor: "#FFFFFF",
      imageSrc: "/assets/SMM-illustration.svg",
      backgroundColor: "#1A1A1A",
      textColor: "white",
      buttonText: "Learn more",
      buttonColor: "#B9FF66",
    },
    {
      title: "Email Marketing",
      titleColor: "#B9FF66",
      imageSrc: "/assets/EM-illustration.svg",
      backgroundColor: "#F9FAFB",
      textColor: "black",
      buttonText: "Learn more",
      buttonColor: "#000000",
    },
    {
      title: "Content Creation",
      titleColor: "#000000",
      imageSrc: "/assets/CC-illustration.svg",
      backgroundColor: "#B9FF66",
      textColor: "black",
      buttonText: "Learn more",
      buttonColor: "#FFFFFF",
    },
    {
      title: "Analytics and Tracking",
      titleColor: "#FFFFFF",
      imageSrc: "/assets/AT-illustration.svg",
      backgroundColor: "#1A1A1A",
      textColor: "white",
      buttonText: "Learn more",
      buttonColor: "#B9FF66",
    },
  ];

  return (
    <>
      <div className="flex">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardsData.map((card, index) => (
          // @ts-ignore
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default ListCards;
