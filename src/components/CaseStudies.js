import React from "react";
import CaseStudieCard from "./CaseStudieCard";

const CaseStudies = () => {
  return (
    <>
      <div className="mb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-start items-center justify-center md:gap-8 mb-2">
          <h2 className="bg-green-light text-2xl font-medium px-2 rounded-md mb-8">
            <span>Case Studies</span>
          </h2>
          <p className="text-center text-xs mb-8 dark:text-white md:w-2/5 md:text-sm md:text-left">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="-mx-4 px-4 md:hidden overflow-x-auto scroll-smooth hide-scrollbar">
          <div className="flex gap-4">
            <div className="flex-shrink-0 bg-dark w-11/12 rounded-4xl p-8 space-y-4 dark:bg-white">
              <CaseStudieCard text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            </div>

            <div className="flex-shrink-0 bg-dark w-11/12 rounded-4xl p-8 space-y-4 dark:bg-white">
              <CaseStudieCard text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            </div>

            <div className="flex-shrink-0 bg-dark w-11/12 rounded-4xl p-8 space-y-4 dark:bg-white">
              <CaseStudieCard text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
            </div>

            <div className="flex-shrink-0 w-1"></div>
            {/* Spacer à la fin */}
          </div>
        </div>

        {/* Desktop Section Placeholder */}
        <div className="hidden md:flex w-full bg-dark dark:bg-white p-10 rounded-4xl items-center">
          <div className="flex-1">
            <CaseStudieCard text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
          </div>
          {/* Barre verticale */}

          <div className="flex-1 px-8 mx-8 border-x-1 border-white dark:border-black">
            <CaseStudieCard text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
          </div>
          {/* Barre verticale */}

          <div className="flex-1">
            <CaseStudieCard text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
