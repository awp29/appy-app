import React from "react";

interface SingleColumnPageProps {
  children: React.ReactNode;
}

const SingleColumnPage: React.FC<SingleColumnPageProps> = ({ children }) => {
  return <div className="p-[48px] w-full">{children}</div>;
};

export default SingleColumnPage;
