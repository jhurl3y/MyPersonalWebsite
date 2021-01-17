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
    <Card className={classes.content}>
      <CardContent>
        <Grid container className={classes.titleSection}>
          <Grid item xs={6} sm={6} md={6}>
            <Typography color="textPrimary">{activityName}</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} align="right">
            <Typography
              className={classes.date}
              color="textSecondary"
              variant="subtitle1"
            >
              {new Date(startTimeGMT).toDateString()}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3} md={3}>
            <Typography color="textSecondary" variant="span" align="left">
              Distance:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span" className={classes.rightPadding}>
              {`${(distance / 1000.0).toLocaleString()} km`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.leftPadding}
            >
              Duration:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${(duration / 60.0).toLocaleString()} mins`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography color="textSecondary" variant="span">
              Average Speed:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span" className={classes.rightPadding}>
              {`${(1000.0 / averageSpeed / 60.0)
                .toFixed(2)
                .toLocaleString()} mins/km`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.leftPadding}
            >
              Max Speed:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${(1000.0 / maxSpeed / 60.0)
                .toFixed(2)
                .toLocaleString()} mins/km`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography color="textSecondary" variant="span">
              Calories:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span" className={classes.rightPadding}>
              {`${Math.floor(calories).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.leftPadding}
            >
              Steps:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${Math.floor(steps).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography color="textSecondary" variant="span">
              Average HR:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span" className={classes.rightPadding}>
              {`${Math.floor(averageHR).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.leftPadding}
            >
              Max HR:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${Math.floor(maxHR).toLocaleString()}`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.rightPadding}
            >
              Min Elevation:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${Math.floor(minElevation).toLocaleString()} m`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              color="textSecondary"
              variant="span"
              className={classes.leftPadding}
            >
              Max Elevation:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span">
              {`${Math.floor(maxElevation).toLocaleString()} m`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <Typography color="textSecondary" variant="span">
              Avg Stride Length:{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={3} align="right">
            <Typography variant="span" className={classes.rightPadding}>
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
