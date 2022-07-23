import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";

function App() {
  const [symptom, setSymtoms] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <HomeContainer symptom={symptom} setSymtoms={setSymtoms} />
    </div>
  );
}

export default App;
