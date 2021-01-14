import React, { useState } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import SummaryTable from "./summaryTable";
import SummaryPie from "./summaryPie";
import ActivityCard from "./activityCard";

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

const allowedActivityStats = [
  "activityName",
  "startTimeGMT",
  "distance",
  "duration",
  "averageSpeed",
  "maxSpeed",
  "startLatitude",
  "startLongitude",
  "calories",
  "averageHR",
  "maxHR",
  "steps",
  "avgStrideLength",
  "minElevation",
  "maxElevation",
];

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState({
    summary: null,
    last_activity: null,
    last_device_used: null,
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
    fetchGarmin("last_activity", { include_details: true }).then((data) => {
      setGarminData((prev) => {
        return {
          ...prev,
          last_activity: data,
        };
      });
    });
  }

  if (garminData.last_device_used == null) {
    fetchGarmin("last_device_used").then((data) => {
      setGarminData((prev) => {
        return {
          ...prev,
          last_device_used: data,
        };
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
      <Grid item xs={12} sm={12} md={6}>
        {garminData.last_activity && garminData.last_device_used && (
          <ActivityCard
            summary={filterObject(
              garminData.last_activity.summary,
              allowedActivityStats
            )}
            last_device_used={garminData.last_device_used}
          />
        )}
      </Grid>
    </Grid>
  );
};
