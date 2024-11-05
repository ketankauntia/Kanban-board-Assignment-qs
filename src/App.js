import "./App.css";
import React, { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [groupBy, setGroupBy] = useState("priority"); // default grouping by status

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar setGroupBy={setGroupBy} />
      {data && <Canvas data={data} groupBy={groupBy} />}
    </div>
  );
}

export default App;
