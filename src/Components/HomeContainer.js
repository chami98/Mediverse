import React from "react";
import TextAnalyzeContainer from "./TextAnalyzeContainer";
import Grid from "@mui/material/Grid";
import OutputDataContainer from "./OutputDataContainer";

const HomeContainer = ({ analyseBtnClick, setAnalyseBtnClick }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "24px" }}>
          <TextAnalyzeContainer
            analyseBtnClick={analyseBtnClick}
            setAnalyseBtnClick={setAnalyseBtnClick}
          />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "24px", paddingRight: "24px" }}>
          <OutputDataContainer analyseBtnClick={analyseBtnClick} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContainer;
