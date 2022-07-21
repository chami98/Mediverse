import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeContainer/>
    </div>
  );
}

export default App;
