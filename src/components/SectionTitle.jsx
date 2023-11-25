import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="text-start border-b border-base-300 pb-5">
      <h2 className="font-semibold lg:text-3xl md:text-sm capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
