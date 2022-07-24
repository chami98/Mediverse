import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ExportDiagnosisTable from "./ExportDiagnosisTable";
import "../App.css";
import {
  AppBar,
  Button,
  Divider,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";
import PositionedSnackbar from "./PositionedSnackbar";

const ExportDiagnosisModal = ({
  symptomChecked,
  diagnosisModalOpen,
  setDiagnosisModalOpen,
  setState,
  state
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "536px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    paddingTop: "33px",
    paddingLeft: "33px",
    paddingRight: "33px",
    paddingBottom: "14px",
  };

  const handleOpen = () => setDiagnosisModalOpen(true);
  const handleClose = () => setDiagnosisModalOpen(false);

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  return (
    <Modal
      open={diagnosisModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AppBar
          sx={{
            background:
              "transparent linear-gradient(96deg, #4864F1 0%, #AA55F4 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              Diagnose exportieren
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Typography variant="body" component="body" className="ModalText">
          Prüfen Sie die ausgewählte Diagnose vor dem Senden.
        </Typography>
        <ExportDiagnosisTable symptomChecked={symptomChecked} />
        <Box sx={{ marginTop: "51px" }}></Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "14px",
            background: "#FAFCFC 0% 0% no-repeat padding-box",
            borderRadius: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #5A55F4",
              borderRadius: "21px",
              opacity: 1,
              marginRight: "10px",
            }}
          >
            ABBRECHEN
          </Button>
          <Button
            style={{
              background:
                "transparent linear-gradient(101deg, #5B55F4 0%, #AC55F4 100%) 0% 0% no-repeat padding-box",
              boxShadow: "0px 2px 2px #0000003D",
              borderRadius: "21px",
              opacity: 1,
            }}
            variant="contained"
            onClick={() =>
              handleClick({
                vertical: "bottom",
                horizontal: "center",
              })
            }
          >
            DIAGNOSE SENDEN
          </Button>
        </Box>
      <PositionedSnackbar state={state} setState={setState} />
      </Box>
    </Modal>
  );
};

export default ExportDiagnosisModal;
