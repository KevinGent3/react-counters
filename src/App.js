import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([0]);
  const addCounter = () => {
    const newCounters = [...counters];
    newCounters.push(0);
    if (counters.length < 3) {
      setCounters(newCounters);
    }
  };
  return (
    <div className="App">
      <div className="counters-container">
        <div className="add-button">
          <button onClick={addCounter}>Add Counter</button>
        </div>
        <div className="map-container">
          {counters.map((counter, index) => {
            return (
              <Counter
                key={index}
                index={index}
                counter={counter}
                counters={counters}
                setCounters={setCounters}
              ></Counter>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
