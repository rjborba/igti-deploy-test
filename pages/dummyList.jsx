import { useEffect, useState } from "react";

const data = ["Metamask", "Solidity", "Ethereum"];
const DummyList = () => {
  const [filtered, setFiltered] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (filterText.trim() === "") {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((item) =>
          item.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
    }
  }, [filterText]);

  return (
    <div>
      <div>This is another version of our app</div>
      <div>
        <label>
          <input onChange={(e) => setFilterText(e.target.value)} />
        </label>
      </div>
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;
