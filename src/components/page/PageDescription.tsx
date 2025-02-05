import React from "react";

interface PageDescriptionProps {
  children: React.ReactNode;
}

const PageDescription: React.FC<PageDescriptionProps> = ({ children }) => {
  return <p className="text-weak">{children}</p>;
};

export default PageDescription;
