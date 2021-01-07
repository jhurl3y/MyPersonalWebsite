import React, { useState } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import SummaryTable from "./summaryTable";

const allowedSummaryStats = [
  "totalKilocalories",
  "totalSteps",
  "totalDistanceMeters",
  "highlyActiveSeconds",
  "activeSeconds",
  "sedentarySeconds",
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
    summaryDate: null,
    last_activity: null,
  });

  if (garminData.summary == null) {
    fetchGarmin("stats").then((data) => {
      setGarminData((prev) => {
        return {
          ...prev,
          summary: filterObject(data, allowedSummaryStats),
          summaryDate: data.calendarDate,
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
            stats={garminData.summary}
            date={garminData.summaryDate}
          />
        )}
      </Grid>
    </Grid>
  );
};
