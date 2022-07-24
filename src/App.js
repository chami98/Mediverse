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

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  return (
    <div className="App">
      <NavBar />
      <HomeContainer
        symptom={symptom}
        setSymtoms={setSymtoms}
        symptomChecked={symptomChecked}
        setSymptomChecked={setSymptomChecked}
        diagnosisModalOpen={diagnosisModalOpen}
        setDiagnosisModalOpen={setDiagnosisModalOpen}
        setState={setState}
        state={state}

      />
    </div>
  );
}

export default App;
