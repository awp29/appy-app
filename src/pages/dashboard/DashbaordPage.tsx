import React from "react";
import Nav from "../../components/nav/Nav";
import SingleColumnPage from "../../components/page/SingleColumnPage";
import PageTitle from "../../components/page/PageTitle";
import PageDescription from "../../components/page/PageDescription";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageTitle>Dashboard</PageTitle>
        <PageDescription>
          Hey there, welcome back. Last login yesterday 14:27
        </PageDescription>
      </SingleColumnPage>
    </div>
  );
};

export default DashboardPage;
