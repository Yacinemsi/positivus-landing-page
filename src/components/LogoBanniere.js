import React from "react";

const LogoBanniere = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 md:py-16 py-8">
        {[
          { src: "/assets/amazon-logo.svg", alt: "logo d'Amazon" },
          { src: "/assets/dribbble-logo.svg", alt: "logo de Dribbble" },
          { src: "/assets/hubspot-logo.svg", alt: "logo de Hubspot" },
          { src: "/assets/notion-logo.svg", alt: "logo de Notion" },
          { src: "/assets/netflix-logo.svg", alt: "logo de Netflix" },
          { src: "/assets/zoom-logo.svg", alt: "logo de Zoom" },
        ].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-20 md:w-28"
          />
        ))}
      </div>
    </>
  );
};

export default LogoBanniere;
