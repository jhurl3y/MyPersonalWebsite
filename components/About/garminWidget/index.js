import React, { useState } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import SummaryTable from "./summaryTable";
import SummaryPie from "./summaryPie";

const allowedSummaryStats = [
  "totalKilocalories",
  "totalSteps",
  "totalDistanceMeters",
  "floorsAscended",
  "floorsDescended",
  "minHeartRate",
  "maxHeartRate",
  "restingHeartRate",
  "lastSevenDaysAvgRestingHeartRate",
];

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState({
    summary: null,
    last_activity: null,
  });

  if (garminData.summary == null) {
    fetchGarmin("stats").then((data) => {
      setGarminData((prev) => {
        return {
          ...prev,
          summary: data,
        };
      });
    });
  }

  if (garminData.last_activity == null) {
    fetchGarmin("last_activity").then((data) => {
      setGarminData((prev) => {
        return { ...prev, last_activity: data };
      });
    });
  }

  return (
    <Grid container spacing={6} className={classes.garmin}>
      <Grid item xs={12} sm={12} md={6}>
        {garminData.summary && (
          <SummaryTable
            stats={filterObject(garminData.summary, allowedSummaryStats)}
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
  );
};
