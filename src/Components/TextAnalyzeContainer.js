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

const axios = require("axios").default;

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

const TextAnalyzeContainer = ({ symtoms, setSymtoms }) => {
  const handleClick = () => {
    postRequest();
  };

  const postRequest = async () => {
    const { data } = await axios.post(
      "http://ec2-18-185-98-84.eu-central-1.compute.amazonaws.com/analyze-document/?=a",
      {
        text: "Der Patient erwähnte, dass er letzte Nacht Fieber und hohe Temperatur hatte. Er hat auch einen trockenen Husten und Halsschmerzen für drei Tage in Folge. Bisher wurden keine Medikamente , nur Tee.",
      }
    );

    let responseData = [...data[0].symptom_icd10_codes];

    for (let index = 1; index < data.length; index++) {
      responseData.push(...data[index].symptom_icd10_codes);
    }

    let sortedData = responseData
      .slice()
      .sort((a, b) => a.code.localeCompare(b.code));

    let symtoms = [];

    const removeDuplicates = (sortedData) => {
      for (let i = 0; i < sortedData.length; i++) {
        if (symtoms.indexOf(sortedData[i]) === -1) {
          symtoms.push(sortedData[i]);
        }
      }
      return symtoms;
    };

    setSymtoms(removeDuplicates(sortedData));
    console.log(removeDuplicates(sortedData));
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