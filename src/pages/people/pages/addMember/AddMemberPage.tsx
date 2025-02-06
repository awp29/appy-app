import React, { useState } from "react";
import Nav from "../../../../components/nav/Nav";
import SingleColumnPage from "../../../../components/page/SingleColumnPage";
import PageDescription from "../../../../components/page/PageDescription";
import PageTitle from "../../../../components/page/PageTitle";
import Input from "../../../../components/form/Input";
import PageHeader from "../../../../components/page/PageHeader";

const AddMemberPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageHeader>
          <PageTitle>Add new member</PageTitle>
        </PageHeader>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>

            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>

            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </SingleColumnPage>
    </div>
  );
};

export default AddMemberPage;
