import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Chip, Stack, Typography, Paper } from "@mui/material";
import "../App.css";

const DetectedDiagnoses = ({ symptom }) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{
                p: 1,
                bgcolor: 'background.default',
                display: 'grid',
                gap: 2,
                paddingBottom : '80px',
    }}>
        {symptom.map((symptom) => {
          const labelId = `checkbox-list-label-${symptom.code}`;

          return (
            <Paper elevation={1} key={symptom.code}>
              <ListItem
                secondaryAction={
                  <Chip
                    label={
                      <Typography
                        variant="ScorePercentage"
                        color="inherit"
                        component="div"
                        className="ScorePercentage"
                      >
                        {(symptom.score * 100).toFixed(2) + " %"}
                      </Typography>
                    }
                    //set chip background color according to the symptom score value

                    sx={{
                      marginBottom : '10px',
                      bgcolor:
                        (symptom.score * 100).toFixed(2) > 70
                          ? "#469C24"
                          : (symptom.score * 100).toFixed(2) < 70 &&
                            40 < (symptom.score * 100).toFixed(2)
                          ? "#6ED111"
                          : "#FCE447",
                    }}
                  />
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
                        checked={checked.indexOf(symptom) !== -1}
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