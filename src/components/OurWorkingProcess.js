import React from "react";
import ToggleAccordion from "./ToggleAccordion";

const OurWorkingProcess = () => {
  const accordionData = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We will analyze your market, competitors, and audience to develop a tailored strategy that meets your goals.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "We execute the plan by utilizing various tools and platforms to maximize your results.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "We execute the plan by utilizing various tools and platforms to maximize your results.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "We execute the plan by utilizing various tools and platforms to maximize your results.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "We execute the plan by utilizing various tools and platforms to maximize your results.",
    },
  ];

  return (
    <>
      <div className="py-10">
        <div className="flex flex-col md:flex-row md:justify-start items-center justify-center md:gap-8 my-8">
          <h2 className="bg-green-light text-2xl font-medium px-2 rounded-md mb-8">
            <span>Our Working Process </span>
          </h2>
          <p className="text-center text-xs mb-8 dark:text-white md:w-64 md:text-sm md:text-left">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="space-y-3">
          {accordionData.map((item, index) => (
            <ToggleAccordion
              key={index}
              number={item.number}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurWorkingProcess;
