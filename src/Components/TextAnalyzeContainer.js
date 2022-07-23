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
import "../App.css";

const axios = require("axios").default;

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const TextAnalyzeHeader = styled(Typography)({
  textAlign: "left",
  font: "normal normal bold 20px/24px Roboto",
  letterSpacing: "0.15px",
  color: "#616161",
  opacity: 1,
});

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

    //get response data from the API and assign data to responseData array

    let responseData = [...data[0].symptom_icd10_codes];

    for (let index = 1; index < data.length; index++) {
      responseData.push(...data[index].symptom_icd10_codes);
    }

    //sort data according to the symtom code

    let sortedData = responseData
      .slice()
      .sort((a, b) => a.code.localeCompare(b.code));

    //remove duplicates from the sortedData array and assign symtoms to the symtoms array

    const symtomCodes = sortedData.map((o) => o.code);
    const symtoms = sortedData.filter(
      ({ code }, index) => !symtomCodes.includes(code, index + 1)
    );

    //sort symtoms accordingto the symtom score

    let sortedSymtoms = symtoms.sort((a, b) => b.score - a.score);

    //set the state

    setSymtoms(sortedSymtoms);
    console.log(sortedSymtoms);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Card>
        <CardHeader
          className="cardHeaderText"
          sx={{
            textAlign: "left",
            background: "#FAFCFC 0% 0% no-repeat padding-box",
            padding: "24px",
          }}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <TextAnalyzeHeader varient="h6">
              Behandlungsmitschrift
            </TextAnalyzeHeader>
          }
        />
        <Box
          sx={{
            background: "#F5F8FA 0% 0% no-repeat padding-box",
            boxShadow: "0px 0px 3px #00000058",
            opacity: 1,
            height: "70vh",
            padding: "24px",
          }}
        >
          <CardContentNoPadding>
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
                marginLeft: "14px",
                marginTop: "5px",
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
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  paddingLeft: "22px",
                  paddingRight: "22px",
                  marginTop: "3px",
                }}
                variant="contained"
                onClick={handleClick}
              >
                <Typography
                  sx={{
                    textAlign: "left",
                    font: "normal normal medium 15px/14px Roboto",
                    fontSize: "15px",
                    lineHeight: "14px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "medium",
                    letterSpacing: "0.01px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    opacity: 1,
                  }}
                >
                  {" "}
                  TEXT ANALYSIEREN
                </Typography>
              </Button>
            </Box>
          </CardContentNoPadding>
        </Box>
      </Card>
    </Box>
  );
};

export default TextAnalyzeContainer;
