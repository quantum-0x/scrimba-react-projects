import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  function clearPeople(e) {
    e.preventDefault();
    setPeople([]);
  }
  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((item) => (
          <li key={item.id} className="person">
            <img src={item.image} alt={item.name} className="img" />
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </li>
        ))}
        <button type="button" className="btn btn-block" onClick={clearPeople}>
          clear all
        </button>
      </div>
    </main>
  );
}
export default App;
