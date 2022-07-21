import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";
import OutputDataContainer from "./OutputDataContainer";

const HomeContainer = ({ symtoms, setSymtoms }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer symtoms={symtoms} setSymtoms={setSymtoms} />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <OutputDataContainer symtoms={symtoms} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;
