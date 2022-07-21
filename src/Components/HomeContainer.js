import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";
import OutputDataContainer from "./OutputDataContainer";

const HomeContainer = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <OutputDataContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;
