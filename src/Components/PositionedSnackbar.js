import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PositionedSnackbar({ state, setState }) {
  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });

  const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Diagnose von Patient Peter Weinholz wurde erfolgreich übermittelt.
        </Alert>
      </Snackbar>
    </div>
  );
}
