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

    // Keep the snackbar state to open dynamically

  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = snackBarState;

  // handleSnackBarOpen function set the state of snackBarState to ----> open : true

  const handleSnackBarOpen = () => {
    setSnackBarState({ ...snackBarState, open: true });
  };

  // handleClose function set the state of snackBarState to ----> open : false

  const handleClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (

    //HomeContainer renders two components in equally separeted two columns , It has used Material ui Grid 

    <div style={{ backgroundColor: "#EBF1F5" }}>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>

          {/* left side component */}

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

          {/* right side component */}

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

{/* SnackBar component wont displayed until snackBarState.open get ---> true */}

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
