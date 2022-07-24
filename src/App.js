import "./App.css";
import NavBar from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";
import { useState } from "react";

function App() {
  const [symptoms, setSymtoms] = useState([]);
  // keep the symtoms input from the API

  const [symptomChecked, setSymptomChecked] = useState([]);
  // keep the checked Symtoms from the user

  const [diagnosisModalOpen, setDiagnosisModalOpen] = useState(false);
  // keep the state of the Diagnosis Modal
  
  const [loading, setLoading] = useState(false);
  // keep the state of the Circular progress bar

  const [text, setText] = useState("");
  // keep the text input from the user


  //clearAll Function triggers when the user clicks DIAGNOSE SENDEN button. It lead following states to their initial states

  const clearAll = () => {
    setSymtoms([])
    setSymptomChecked([])
    setDiagnosisModalOpen(false)
  }

  return (
    <div className="App">
      <NavBar />

      {/* This includes all the dynamical components including major two components */}

      <HomeContainer

        // Passing states to the child components

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
