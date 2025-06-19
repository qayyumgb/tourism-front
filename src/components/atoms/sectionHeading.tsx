import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className = "",
}) => {
  return (
    <p className={`text-[24px] font-semibold mb-4 ${className}`}>
      {title}
    </p>
  );
};

export default SectionHeading;
