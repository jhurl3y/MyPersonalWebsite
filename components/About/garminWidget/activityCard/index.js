import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Styles from "./styles";

export default ({
  summary: {
    activityName,
    startTimeGMT,
    distance,
    duration,
    averageSpeed,
    maxSpeed,
    calories,
    averageHR,
    maxHR,
    steps,
    avgStrideLength,
    minElevation,
    maxElevation,
  },
  last_device_used: { lastUsedDeviceName, imageUrl },
}) => {
  const classes = Styles();

  return (
    <Card>
      <CardContent>
        <div className={classes.titleSection}>
          <Typography color="textPrimary" variant="subtitle1">
            <strong>{activityName}</strong>{" "}
          </Typography>
          <Typography
            className={classes.date}
            color="textSecondary"
            variant="subtitle1"
          >
            {new Date(startTimeGMT).toDateString()}
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Distance:{" "}
            </Typography>
            <Typography variant="span">
              {`${(distance / 1000.0).toLocaleString()} km`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Duration:{" "}
            </Typography>
            <Typography variant="span">
              {`${(duration / 60.0).toLocaleString()} mins`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Average Speed:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(averageSpeed).toLocaleString()} m/s`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Max Speed:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(maxSpeed).toLocaleString()} m/s`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Calories:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(calories).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Steps:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(steps).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Average HR:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(averageHR).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Max HR:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(maxHR).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Min Elevation:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(minElevation).toLocaleString()} m`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Max Elevation:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(maxElevation).toLocaleString()} m`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="textSecondary" variant="span">
              Avg Stride Length:{" "}
            </Typography>
            <Typography variant="span">
              {`${Math.floor(avgStrideLength).toLocaleString()} m`}
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.garminImage}>
          <img src={imageUrl} width={200} height={200} alt="garmin" />
          <Typography
            color="textSecondary"
            className={classes.garminText}
          >{`Recorded on ${lastUsedDeviceName}`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
