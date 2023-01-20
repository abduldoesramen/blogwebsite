import Table from "./Table";

const characters = [
  {
    name: "Charlie",
    job: "Job",
  },
  {
    name: "Mac",
    job: "Bouncer",
  },
  {
    name: "Dee",
    job: "Aspiring actress",
  },
  {
    name: "Dennis",
    job: "Bartender",
  },
];

const App = () => {
  return (
    <div>
      <Table characterData={characters} />
    </div>
  );
};

export default App;
