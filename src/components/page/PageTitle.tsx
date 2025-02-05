import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h1 className="text-[40px] text-strong">{children}</h1>;
};

export default PageTitle;
