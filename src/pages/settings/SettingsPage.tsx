import React from "react";
import Nav from "../../components/nav/Nav";
import SingleColumnPage from "../../components/page/SingleColumnPage";
import PageTitle from "../../components/page/PageTitle";
import PageDescription from "../../components/page/PageDescription";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageTitle>Settings</PageTitle>
        <PageDescription>
          This page is coming at... some point 🤷‍♂️
        </PageDescription>
      </SingleColumnPage>
    </div>
  );
};

export default SettingsPage;
