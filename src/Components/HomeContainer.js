import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";
import OutputDataContainer from "./OutputDataContainer";

const HomeContainer = ({
  symptom,
  setSymtoms,
  symptomChecked,
  setSymptomChecked,
  diagnosisModalOpen,
  setDiagnosisModalOpen,
}) => {
  return (
    <div style={{ backgroundColor: "#EBF1F5" }}>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer symptom={symptom} setSymtoms={setSymtoms} />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <OutputDataContainer
            symptom={symptom}
            symptomChecked={symptomChecked}
            setSymptomChecked={setSymptomChecked}
            diagnosisModalOpen={diagnosisModalOpen}
            setDiagnosisModalOpen={setDiagnosisModalOpen}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;
