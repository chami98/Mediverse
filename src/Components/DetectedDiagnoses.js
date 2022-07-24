import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Chip, Stack, Typography, Paper } from "@mui/material";
import "../App.css";

const DetectedDiagnoses = ({ symptom, symptomChecked, setSymptomChecked }) => {
  const handleToggle = (value) => () => {
    const currentIndex = symptomChecked.indexOf(value);
    const newSymptomChecked = [...symptomChecked];

    if (currentIndex === -1) {
      newSymptomChecked.push(value);
    } else {
      newSymptomChecked.splice(currentIndex, 1);
    }

    setSymptomChecked(newSymptomChecked);
    console.log(newSymptomChecked);
  };

  return (
    <Box
      sx={{
        p: 1,
        bgcolor: "background.default",
        display: "grid",
        gap: 2,
        paddingBottom: "80px",
      }}
    >
      {symptom.map((symptom) => {
        const labelId = `checkbox-list-label-${symptom.code}`;

        return (
          <Paper elevation={1} key={symptom.code}>
            <ListItem
              secondaryAction={
                <Box sx={{ marginTop: "15px", marginBottom: "14px" }}>
                  <Chip
                    label={
                      <Box
                        sx={{
                          width: "30px",
                          height: "19px",
                          textAlign: "center",
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center",
                          font: "normal normal normal 14px/20px Roboto",
                          letterSpacing: "0.01px",
                          color: "#ffffff",
                          opacity: 1,
                        }}
                      >
                        <Typography
                          variant="ScorePercentage"
                          color="inherit"
                          component="div"
                          className="ScorePercentage"
                        >
                          {(symptom.score * 100).toFixed(1) + " %"}
                        </Typography>
                      </Box>
                    }
                    //set chip background color according to the symptom score value

                    sx={{
                      paddingTop: "14px",
                      paddingBottom: "12px",

                      bgcolor:
                        (symptom.score * 100).toFixed(2) > 70
                          ? "#469C24"
                          : (symptom.score * 100).toFixed(2) < 70 &&
                            40 < (symptom.score * 100).toFixed(2)
                          ? "#6ED111"
                          : "#FCE447",
                    }}
                  />
                </Box>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(symptom)}
                dense
              >
                <Box sx={{ width: "18px", marginRight: "15px" }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={symptomChecked.indexOf(symptom) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                </Box>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography
                    variant="SymptomCode"
                    component="div"
                    className="SymptomCode"
                  >
                    {symptom.code}
                  </Typography>
                  <Typography
                    variant="SymptomName"
                    component="div"
                    className="SymptomName"
                    style={{ marginLeft: "36px", fontSize: "16px" }}
                  >
                    {symptom.name}
                  </Typography>
                </Stack>
              </ListItemButton>
            </ListItem>
          </Paper>
        );
      })}
    </Box>
  );
};

export default DetectedDiagnoses;
