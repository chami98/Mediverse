import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import OutputDataContainer from "./OutputDataContainer";

const HomeContainer = ({
  clearAll,
  symptoms,
  setSymtoms,
  symptomChecked,
  setSymptomChecked,
  diagnosisModalOpen,
  setDiagnosisModalOpen,
  loading,
  setLoading,
  text,
  setText,
}) => {
  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = snackBarState;

  const handleSnackBarOpen = () => {
    setSnackBarState({ ...snackBarState, open: true });
  };

  const handleClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (
    <div style={{ backgroundColor: "#EBF1F5" }}>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer
            setSymtoms={setSymtoms}
            clearAll={clearAll}
            loading={loading}
            setLoading={setLoading}
            text={text}
            setText={setText}
          />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <OutputDataContainer
            clearAll={clearAll}
            symptoms={symptoms}
            symptomChecked={symptomChecked}
            setSymptomChecked={setSymptomChecked}
            diagnosisModalOpen={diagnosisModalOpen}
            setDiagnosisModalOpen={setDiagnosisModalOpen}
            handleSnackBarOpen={handleSnackBarOpen}
            loading={loading}
            text={text}
            setText={setText}
          />
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical,
            horizontal,
          }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Diagnose von Patient Peter Weinholz wurde erfolgreich übermittelt.
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default HomeContainer;
