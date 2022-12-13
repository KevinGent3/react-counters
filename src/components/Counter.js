const Counter = ({ index, counter, counters, setCounters }) => {
  const handleClickMinus = (index) => {
    const newCounters = [...counters];
    if (counter > 0) {
      newCounters[index] = newCounters[index] - 1;
      setCounters(newCounters);
    }
  };

  const handleClickPlus = (index) => {
    const newCounters = [...counters];
    newCounters[index] = newCounters[index] + 1;
    setCounters(newCounters);
  };
  const handleReset = (index) => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };
  return (
    <div className="counter-container">
      <div className="counter-buttons">
        <button
          onClick={() => {
            handleClickMinus(index);
          }}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            handleClickPlus(index);
          }}
        >
          +
        </button>
      </div>

      <div className="reset-button">
        <button
          onClick={() => {
            handleReset(index);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
