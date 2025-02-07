import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const PageHeader: React.FC<HeaderProps> = (props) => {
  const { children } = props;

  return <div className="mb-[48px] flex">{children}</div>;
};

export default PageHeader;
