import React, { useState, useMemo } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import SummaryTable from "./summaryTable";
import SummaryPie from "./summaryPie";
import ActivityCard from "./activityCard";
import ActivityChart from "./activityChart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Map from "../../Map";
import { aboutStrings } from "../../../utils/strings";

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

const parseChartData = (details) => {
  let heartRates = [];
  let speed = [];
  let pathCoordinates = [];

  details.forEach((detail, i) => {
    heartRates[i] = [i, detail.metrics[6]];
    speed[i] = [i, 1000.0 / detail.metrics[8] / 60.0];
    pathCoordinates[i] = { lat: detail.metrics[14], lng: detail.metrics[12] };
  });

  return {
    heartRates,
    speed,
    pathCoordinates,
  };
};

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState({
    summary: null,
    last_activity_summary: null,
    last_activity_details: null,
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

  if (garminData.last_activity_summary == null) {
    fetchGarmin("last_activity", { include_details: true }).then((data) => {
      setGarminData((prev) => {
        return {
          ...prev,
          last_activity_summary: data.summary,
          last_activity_details: data.details,
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

  const chartData = useMemo(() => {
    return garminData.last_activity_details
      ? parseChartData(garminData.last_activity_details.activityDetailMetrics)
      : null;
  }, [garminData.last_activity_details]);

  return (
    <div>
      {garminData.summary && (
        <Typography
          variant="h3"
          align="center"
          className={`${classes.subHeading} ${classes.spacing}`}
        >
          {`${aboutStrings.garminSummary} - ${new Date(
            garminData.summary.calendarDate
          ).toDateString()}`}
        </Typography>
      )}
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
      {garminData.last_activity_summary && (
        <Typography
          variant="h3"
          align="center"
          className={`${classes.subHeading} ${classes.spacingBottom}`}
        >
          {aboutStrings.garminLastActivity}
        </Typography>
      )}
      <Grid container spacing={6} className={classes.garmin}>
        <Grid item xs={12} sm={12} md={6}>
          {garminData.last_activity_summary && garminData.last_device_used && (
            <ActivityCard
              summary={filterObject(
                garminData.last_activity_summary,
                allowedActivityStats
              )}
              last_device_used={garminData.last_device_used}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {chartData && (
            <Map
              location={
                chartData.pathCoordinates[
                  Math.round((chartData.pathCoordinates.length - 1) / 4)
                ]
              }
              zoom={14}
              title="activity-map"
              showPolyline
              polylineData={chartData.pathCoordinates}
              polylineOptions={{
                strokeColor: "#ff2527",
                strokeOpacity: 0.75,
                strokeWeight: 2,
              }}
              mapClasses={classes.map}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {chartData && (
            <Card>
              <CardContent>
                <ActivityChart
                  label="Heart Rates"
                  data={chartData.heartRates}
                />
                <ActivityChart label="Speed" data={chartData.speed} />
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
