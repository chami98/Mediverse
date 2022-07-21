import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TextAnalyzeContainer = ({ analyseBtnClick, setAnalyseBtnClick }) => {
  const handleClick = () => {
    setAnalyseBtnClick(true);
    console.log(analyseBtnClick);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Card>
        <CardHeader
          sx={{
            textAlign: "left",
            background: "#FAFCFC 0% 0% no-repeat padding-box",
          }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Behandlungsmitschrift"
        />
        <Box
          sx={{
            background: "#F5F8FA 0% 0% no-repeat padding-box",
            boxShadow: "0px 0px 3px #00000058",
            opacity: 1,

            height: "78vh",
          }}
        >
          <CardContent>
            <Box
              sx={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #0000001F",
                borderRadius: "4px",
                opacity: 1,
                width: "100%",
              }}
            >
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "left",
                font: "normal normal normal 12px/20px Roboto",
                letterSpacing: "0px",
                color: "#00000099",
                opacity: 1,
              }}
            >
              Geben Sie hier einen Freitext zu den Beschwerden Ihres Patienten
              an
            </Typography>
            <Box
              sx={{
                textAlign: "left",
                font: "normal normal medium 15px/14px Roboto",
                letterSpacing: "0.01px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              <Button
                style={{
                  background:
                    "transparent linear-gradient(103deg, #5C55F4 0%, #AC55F4 100%) 0% 0% no-repeat padding-box",
                  boxShadow: "0px 2px 2px #0000003D",
                  borderRadius: "21px",
                  opacity: 1,
                  float: "right",
                }}
                variant="contained"
                onClick={handleClick}
              >
                TEXT ANALYSIEREN
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default TextAnalyzeContainer;
