import React, { useState, useMemo } from "react";
import Styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchGarmin, filterObject } from "../../../utils/helpers";
import ActivityCard from "./activityCard";
import ActivityChart from "./activityChart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Map from "../../Map";
import { aboutStrings } from "../../../utils/strings";
import {
  COLORS,
  POLYLINE_OPACITY,
  POLYLINE_WEIGHT,
  MAP_ZOOM_GARMIN,
  ALLOWED_ACTIVITY_STATS,
} from "../../../utils/constants";

const parseChartData = (details) => {
  let heartRates = [];
  let speed = [];
  let pathCoordinates = [];

  details.forEach((detail, i) => {
    // Heart Rate: time (convert to mins), heart rate (beats/min)
    heartRates[i] = [detail.metrics[1] / 60.0, detail.metrics[6]];

    // Speed: time (convert to mins), speed (convert to mins/km)
    speed[i] = [
      detail.metrics[1] / 60.0,
      detail.metrics[8] === 0 ? 0 : 1000.0 / detail.metrics[8] / 60.0,
    ];

    // Path: lat, long
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
    last_activity_summary: null,
    last_activity_details: null,
    last_device_used: null,
  });

  // if (garminData.last_activity_summary == null) {
  //   fetchGarmin("last_activity", { include_details: true }).then((data) => {
  //     setGarminData((prev) => {
  //       return {
  //         ...prev,
  //         last_activity_summary: data.summary,
  //         last_activity_details: data.details,
  //       };
  //     });
  //   });
  // }

  // if (garminData.last_device_used == null) {
  //   fetchGarmin("last_device_used").then((data) => {
  //     setGarminData((prev) => {
  //       return {
  //         ...prev,
  //         last_device_used: data,
  //       };
  //     });
  //   });
  // }

  const chartData = useMemo(() => {
    return garminData.last_activity_details
      ? parseChartData(garminData.last_activity_details.activityDetailMetrics)
      : null;
  }, [garminData.last_activity_details]);

  return (
    <>
      {garminData.last_activity_summary && (
        <Typography variant="h3" align="center" className={classes.mostRecent}>
          {aboutStrings.garminLastActivity}
        </Typography>
      )}
      <Grid container spacing={6} className={classes.garmin}>
        <Grid item xs={12} sm={12} md={6}>
          {garminData.last_activity_summary && garminData.last_device_used && (
            <ActivityCard
              summary={filterObject(
                garminData.last_activity_summary,
                ALLOWED_ACTIVITY_STATS
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
              zoom={MAP_ZOOM_GARMIN}
              title="activity-map"
              showPolyline
              polylineData={chartData.pathCoordinates}
              polylineOptions={{
                strokeColor: COLORS.polyline,
                strokeOpacity: POLYLINE_OPACITY,
                strokeWeight: POLYLINE_WEIGHT,
              }}
              mapClasses={classes.map}
            />
          )}
        </Grid>
        <Grid item lg={12}>
          {chartData && (
            <Card className={classes.charts}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} align="center">
                    <Typography
                      className={classes.axisLabel}
                      color="textSecondary"
                    >
                      {aboutStrings.heartRateLabel}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.spacingBottom}>
                    <ActivityChart
                      label={aboutStrings.heartRate}
                      tooltipLabel={aboutStrings.heartRateTooltip}
                      timeLabel={aboutStrings.timeLabel}
                      data={chartData.heartRates}
                      showAxis={false}
                      backgroundColor={COLORS.red}
                    />
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Typography
                      className={classes.axisLabel}
                      color="textSecondary"
                    >
                      {aboutStrings.speedLabel}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ActivityChart
                      label={aboutStrings.speed}
                      tooltipLabel={aboutStrings.speedTooltip}
                      timeLabel={aboutStrings.timeLabel}
                      tooltipDecimal
                      data={chartData.speed}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};
