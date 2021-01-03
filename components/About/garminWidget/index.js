import React, { useState } from "react";
import Styles from "./styles";
import { fetchGarmin } from "../../../utils/helpers";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const StatsTable = ({ stats: stats }) => {
  const statsList = Object.keys(stats).map((key) => {
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {key}
        </TableCell>
        <TableCell>{JSON.stringify(stats[key])}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{statsList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState({
    summary: null,
    last_activity: null,
  });

  if (garminData.summary == null) {
    console.log("fetching");
    fetchGarmin("stats").then((data) => {
      setGarminData((prev) => {
        return { ...prev, summary: data };
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
        {garminData.summary && <StatsTable stats={garminData.summary} />}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {garminData.last_activity && (
          <StatsTable stats={garminData.last_activity} />
        )}
      </Grid>
    </Grid>
  );
};
