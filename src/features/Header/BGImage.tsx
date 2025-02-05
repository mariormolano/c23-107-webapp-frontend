import React from "react";

interface BackgroundProps {
  svgUrl: string;
}

const BGImage: React.FC<BackgroundProps> = ({ svgUrl }) => {
  return (
    <div
      className="w-full h-[248px] bg-cover bg-no-repeat m-1"
      style={{ backgroundImage: `url(${svgUrl})` }}
    ></div>
  );
};

export default BGImage;
