import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";

const HomeContainer = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <TextAnalyzeContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;
