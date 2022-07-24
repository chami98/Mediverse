import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";
import SnackbarCom from "./Components/PositionedSnackbar";
import PositionedSnackbar from "./Components/PositionedSnackbar";

function App() {
  const [symptom, setSymtoms] = useState([]);
  const [symptomChecked, setSymptomChecked] = useState([]);
  const [diagnosisModalOpen, setDiagnosisModalOpen] = useState(false);
  
  const [loading, setLoading] = useState(false);


  const clearAll = () => {
    setSymtoms([])
    setSymptomChecked([])
    setDiagnosisModalOpen(false)
  }

  return (
    <div className="App">
      <NavBar />
      <HomeContainer
        clearAll={clearAll}
        symptom={symptom}
        setSymtoms={setSymtoms}
        symptomChecked={symptomChecked}
        setSymptomChecked={setSymptomChecked}
        diagnosisModalOpen={diagnosisModalOpen}
        setDiagnosisModalOpen={setDiagnosisModalOpen}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
