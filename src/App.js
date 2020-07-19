import React, { useEffect } from "react";

export default function App() {
  const fetchData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>React app built from scratch with Webpack</h1>
    </div>
  );
}
