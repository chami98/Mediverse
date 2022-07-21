import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";

function App() {
  const [symtoms, setSymtoms] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <HomeContainer symtoms={symtoms} setSymtoms={setSymtoms} />
    </div>
  );
}

export default App;
