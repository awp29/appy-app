export enum Role {
  SoftwareEngineer = "Software Engineer",
  ProductManager = "Product Manager",
  Designer = "Designer",
  DataScientist = "Data Scientist",
  DevOpsEngineer = "DevOps Engineer",
  QAEngineer = "QA Engineer",
  HRManager = "HR Manager",
  SalesRepresentative = "Sales Representative",
  MarketingSpecialist = "Marketing Specialist",
  CustomerSupport = "Customer Support",
}

export enum Team {
  Rocket = "Rocket",
  Astro = "Astro",
  Galaxy = "Galaxy",
  Comet = "Comet",
  Nebula = "Nebula",
}

export type Person = {
  details: {
    name: string;
    email: string;
  };
  role: Role;
  team: Team;
  dateJoined: string;
};
