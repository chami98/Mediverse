import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";

function App() {
  const [analyseBtnClick, setAnalyseBtnClick] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <HomeContainer
        analyseBtnClick={analyseBtnClick}
        setAnalyseBtnClick={setAnalyseBtnClick}
      />
    </div>
  );
}

export default App;
