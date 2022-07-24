import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";

function App() {
  const [symptom, setSymtoms] = useState([]);
  const [symptomChecked, setSymptomChecked] = useState([]);
  const [diagnosisModalOpen, setDiagnosisModalOpen] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <HomeContainer
        symptom={symptom}
        setSymtoms={setSymtoms}
        symptomChecked={symptomChecked}
        setSymptomChecked={setSymptomChecked}
        diagnosisModalOpen ={diagnosisModalOpen}
        setDiagnosisModalOpen ={setDiagnosisModalOpen}

      />
    </div>
  );
}

export default App;
