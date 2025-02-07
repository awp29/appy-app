import React from "react";
import PageButton from "./PageButton";

interface PaginationProps {
  children: React.ReactNode;
}

type PaginationComponent = React.FC<PaginationProps> & {
  PageButton: typeof PageButton;
};

const Pagination: PaginationComponent = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-between gap-1 mt-[24px]">
      {children}
    </div>
  );
};

Pagination.PageButton = PageButton;

export default Pagination;
