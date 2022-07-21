import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/system";
import { Chip, Stack, Typography } from "@mui/material";

const DetectedDiagnoses = ({ symtoms }) => {
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
    <Box sx={{}}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {symtoms.map((symtom) => {
          const labelId = `checkbox-list-label-${symtom.code}`;

          return (
            <ListItem
              key={symtom.code}
              secondaryAction={
                <Chip label={(symtom.score * 100).toFixed(2)} color="success" />
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(symtom)}
                dense
              >
                <Box sx={{ width: "18px", marginRight: "15px" }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(symtom) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                   */}
                </Box>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography>{symtom.code}</Typography>
                  <Typography style={{ marginLeft: "36px", fontSize: "16px" }}>
                    {symtom.name}
                  </Typography>
                </Stack>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default DetectedDiagnoses;
