import { Person, Role, Team } from "./types";

function getRandomDateWithinLast10Years() {
  const end = new Date();
  const start = new Date();
  start.setFullYear(start.getFullYear() - 10);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
}

export const mockPeople: Person[] = [
  {
    details: { name: "Alice Johnson", email: "alice.johnson@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Bob Brown", email: "bob.brown@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Charlie Davis", email: "charlie.davis@appyapp.com" },
    role: Role.DevOpsEngineer,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Diana Evans", email: "diana.evans@appyapp.com" },
    role: Role.QAEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ethan Harris", email: "ethan.harris@appyapp.com" },
    role: Role.HRManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Fiona Clark", email: "fiona.clark@appyapp.com" },
    role: Role.SalesRepresentative,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "George Lewis", email: "george.lewis@appyapp.com" },
    role: Role.MarketingSpecialist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Hannah Walker", email: "hannah.walker@appyapp.com" },
    role: Role.CustomerSupport,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ivy Martinez", email: "ivy.martinez@appyapp.com" },
    role: Role.SoftwareEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Jack Wilson", email: "jack.wilson@appyapp.com" },
    role: Role.ProductManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Karen Young", email: "karen.young@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Liam King", email: "liam.king@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Mia Scott", email: "mia.scott@appyapp.com" },
    role: Role.DevOpsEngineer,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Noah Green", email: "noah.green@appyapp.com" },
    role: Role.QAEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Olivia Adams", email: "olivia.adams@appyapp.com" },
    role: Role.HRManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Paul Baker", email: "paul.baker@appyapp.com" },
    role: Role.SalesRepresentative,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Quinn Carter", email: "quinn.carter@appyapp.com" },
    role: Role.MarketingSpecialist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ruby Diaz", email: "ruby.diaz@appyapp.com" },
    role: Role.CustomerSupport,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Sam Edwards", email: "sam.edwards@appyapp.com" },
    role: Role.SoftwareEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Tina Foster", email: "tina.foster@appyapp.com" },
    role: Role.ProductManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Uma Garcia", email: "uma.garcia@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Victor Hill", email: "victor.hill@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Wendy Johnson", email: "wendy.johnson@appyapp.com" },
    role: Role.DevOpsEngineer,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Xander Lee", email: "xander.lee@appyapp.com" },
    role: Role.QAEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Yara Martinez", email: "yara.martinez@appyapp.com" },
    role: Role.HRManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Zane Nelson", email: "zane.nelson@appyapp.com" },
    role: Role.SalesRepresentative,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Abby Owens", email: "abby.owens@appyapp.com" },
    role: Role.MarketingSpecialist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ben Parker", email: "ben.parker@appyapp.com" },
    role: Role.CustomerSupport,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Cara Quinn", email: "cara.quinn@appyapp.com" },
    role: Role.SoftwareEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "David Roberts", email: "david.roberts@appyapp.com" },
    role: Role.ProductManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ella Smith", email: "ella.smith@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Frank Taylor", email: "frank.taylor@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Grace Underwood", email: "grace.underwood@appyapp.com" },
    role: Role.DevOpsEngineer,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Henry Vance", email: "henry.vance@appyapp.com" },
    role: Role.QAEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Isla White", email: "isla.white@appyapp.com" },
    role: Role.HRManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Jake Xander", email: "jake.xander@appyapp.com" },
    role: Role.SalesRepresentative,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Kara Young", email: "kara.young@appyapp.com" },
    role: Role.MarketingSpecialist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Leo Zimmerman", email: "leo.zimmerman@appyapp.com" },
    role: Role.CustomerSupport,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Molly Allen", email: "molly.allen@appyapp.com" },
    role: Role.SoftwareEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Nathan Brown", email: "nathan.brown@appyapp.com" },
    role: Role.ProductManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Olivia Clark", email: "olivia.clark@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Peter Davis", email: "peter.davis@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Quincy Evans", email: "quincy.evans@appyapp.com" },
    role: Role.DevOpsEngineer,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Rachel Foster", email: "rachel.foster@appyapp.com" },
    role: Role.QAEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Steven Green", email: "steven.green@appyapp.com" },
    role: Role.HRManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Tina Harris", email: "tina.harris@appyapp.com" },
    role: Role.SalesRepresentative,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Ursula Johnson", email: "ursula.johnson@appyapp.com" },
    role: Role.MarketingSpecialist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Victor King", email: "victor.king@appyapp.com" },
    role: Role.CustomerSupport,
    team: Team.Nebula,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Wendy Lewis", email: "wendy.lewis@appyapp.com" },
    role: Role.SoftwareEngineer,
    team: Team.Rocket,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Xander Martinez", email: "xander.martinez@appyapp.com" },
    role: Role.ProductManager,
    team: Team.Astro,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Yara Nelson", email: "yara.nelson@appyapp.com" },
    role: Role.Designer,
    team: Team.Galaxy,
    dateJoined: getRandomDateWithinLast10Years(),
  },
  {
    details: { name: "Zane Owens", email: "zane.owens@appyapp.com" },
    role: Role.DataScientist,
    team: Team.Comet,
    dateJoined: getRandomDateWithinLast10Years(),
  },
];
