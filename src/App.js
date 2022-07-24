import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";
import SnackbarCom from "./Components/PositionedSnackbar";
import PositionedSnackbar from "./Components/PositionedSnackbar";

function App() {
  const [symptoms, setSymtoms] = useState([]);
  const [symptomChecked, setSymptomChecked] = useState([]);
  const [diagnosisModalOpen, setDiagnosisModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");



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
        symptoms={symptoms}
        setSymtoms={setSymtoms}
        symptomChecked={symptomChecked}
        setSymptomChecked={setSymptomChecked}
        diagnosisModalOpen={diagnosisModalOpen}
        setDiagnosisModalOpen={setDiagnosisModalOpen}
        loading={loading}
        setLoading={setLoading}
        text={text}
        setText={setText}
      />
    </div>
  );
}

export default App;
