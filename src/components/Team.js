import React from "react";
import CardTeam from "./CardTeam";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-start items-center justify-center md:gap-8 my-8">
        <h2 className="bg-green-light text-2xl font-medium px-2 rounded-md mb-8">
          <span>Team</span>
        </h2>
        <p className="text-center text-xs mb-8 dark:text-white md:w-96 md:text-sm md:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap justify-center pb-10">
        <CardTeam
          name="John Smith"
          title="CEO and Founder"
          image="/assets/john-smith.png"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <CardTeam
          name="Jane Doe"
          title="Director of Operations"
          image="/assets/jane-doe.png"
          description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <CardTeam
          name="Michael Brown"
          title="Senior SEO Specialist"
          image="/assets/michael-brown.png"
          description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <CardTeam
          name="Emily Johnson"
          title="PPC Manager"
          image="/assets/emily-johnson.png"
          description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <CardTeam
          name="Brian Williams"
          title="Social Media Specialist"
          image="/assets/brian-williams.png"
          description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <CardTeam
          name="Sarah Kim"
          title="Content Creator"
          image="/assets/sarah-kim.png"
          description="2+ years of experience in writing and editing
Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </div>
    </div>
  );
};

export default Team;
