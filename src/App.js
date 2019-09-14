import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState(getRandomColor());

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={4} />
      Counter Hooks
      <CounterHooks initialCount={3} />
      <button
        onClick={() =>
          setTheme(prevTheme => {
            return prevTheme === "red" ? getRandomColor() : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default App;
