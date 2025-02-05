import React from "react";
import Nav from "../../components/nav/Nav";
import SingleColumnPage from "../../components/page/SingleColumnPage";
import PageTitle from "../../components/page/PageTitle";
import PageDescription from "../../components/page/PageDescription";

const PeoplePage: React.FC = () => {
  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageTitle>People</PageTitle>
        <PageDescription>Have a little spy on your people</PageDescription>
      </SingleColumnPage>
    </div>
  );
};

export default PeoplePage;
