import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="quote-container">
      <h2 className="quote">
        "Programming is not about what you know; it's about what you can figure
        out."
      </h2>
      <p className="author">- Unknown</p>
      <h2 className="quote2">
        "The only way to learn a new programming language is by writing programs
        in it."
      </h2>
      <p className="author">- Dennis Ritchie</p>
    </div>
  );
}

export default App;
