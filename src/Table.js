import App from "./App.js";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData } = props;

  return (
    <div>
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    </div>
  );
};

export default Table;
