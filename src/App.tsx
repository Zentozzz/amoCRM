import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);
  const [start, setStart] = React.useState(false);

  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - 3600 * hours) / 60);
  const seconds = Math.floor(value - (3600 * hours + 60 * minutes));

  React.useEffect(() => {
    if (value === 0) {
      setStart(false);
    }
    const timerID = setInterval(
      () => start && setValue(value > 0 ? value - 1 : 0),
      1000
    );
    return () => clearInterval(timerID);
  }, [value, start]);

  return (
    <div className="App">
      <div className="flex">
        <input
          value={value}
          placeholder="Seconds"
          onChange={(e) =>
            setValue(Number(e.target.value.replace(/[^0-9, ]/g, "")))
          }
        />
        <div
          className="start"
          onClick={() => {
            setStart(!start);
          }}
        >
          <p>{start ? "Stop" : "Start"}</p>
        </div>
      </div>
      <div className="time">
        <p>
          {hours.toString().length === 1 ? `0${hours}` : hours}:
          {minutes.toString().length === 1 ? `0${minutes}` : minutes}:
          {seconds.toString().length === 1 ? `0${seconds}` : seconds}
        </p>
      </div>
    </div>
  );
}

export default App;
