import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import { Button, Divider, Stack, TextField } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { width } from "@mui/system";
import DetectedDiagnoses from "./DetectedDiagnoses";

const OutputDataContainer = ({ symtoms }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
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
          title="Erkannte Diagnosen"
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
            {!symtoms === undefined || symtoms.length == 0 ? (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
              >
                <InfoOutlinedIcon
                  style={{
                    fontSize: 18,
                    opacity: 1,
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "left",
                    font: "normal normal normal 12px/20px Roboto",
                    letterSpacing: "0px",
                    color: "#00000099",
                    opacity: 1,
                  }}
                >
                  Es liegen keine Diagnosen vor. Bitte geben Sie bitte erst die
                  Beschwerden Ihres Patienten in dem freien Textfeld an und
                  drücken Sie anschließend auf „Text analysieren.“
                </Typography>
              </Stack>
            ) : null}

            {!symtoms === undefined || !symtoms.length == 0 ? (
              <DetectedDiagnoses symtoms={symtoms} />
            ) : null}
          </CardContent>
          <Box
            sx={{
              background: "#FAFCFC 0% 0% no-repeat padding-box",
              height: "76px",
              position: "absolute",
              bottom: 0,
              float: "right",
              width: "100%",
            }}
          >
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                p: 1,
                m: 1,
                background: "#FAFCFC 0% 0% no-repeat padding-box",
                borderRadius: 1,
              }}
            >
              <Button
                style={{
                  background:
                    "transparent linear-gradient(101deg, #5B55F4 0%, #AC55F4 100%) 0% 0% no-repeat padding-box",
                  boxShadow: "0px 2px 2px #0000003D",
                  borderRadius: "21px",
                  opacity: 1,
                }}
                variant="contained"
              >
                DIAGNOSE EXPORTIEREN
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default OutputDataContainer;
