import React, { useState, useMemo } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import SummaryTable from "./summaryTable";
import SummaryPie from "./summaryPie";
import { aboutStrings } from "../../../utils/strings";
import { ALLOWED_SUMMARY_STATS } from "../../../utils/constants";

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState({
    summary: null,
  });

  // if (garminData.summary == null) {
  //   fetchGarmin("stats").then((data) => {
  //     setGarminData((prev) => {
  //       return {
  //         ...prev,
  //         summary: data,
  //       };
  //     });
  //   });
  // }

  return (
    <>
      {garminData.summary && (
        <div className={classes.spacingBottom}>
          <Typography variant="h3" align="center" className={classes.summary}>
            {aboutStrings.garminSummary}
          </Typography>
          <Typography
            color="textSecondary"
            align="center"
            className={classes.date}
          >
            {new Date(garminData.summary.calendarDate).toDateString()}
          </Typography>
        </div>
      )}
      <Grid container spacing={6} className={classes.garmin}>
        <Grid item xs={12} sm={12} md={6}>
          {garminData.summary && (
            <SummaryTable
              stats={filterObject(garminData.summary, ALLOWED_SUMMARY_STATS)}
              date={garminData.summary.calendarDate}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {garminData.summary && (
            <SummaryPie
              highlyActiveSeconds={garminData.summary.highlyActiveSeconds}
              activeSeconds={garminData.summary.activeSeconds}
              sedentarySeconds={garminData.summary.sedentarySeconds}
              sleepingSeconds={garminData.summary.sleepingSeconds}
              date={garminData.summary.calendarDate}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
