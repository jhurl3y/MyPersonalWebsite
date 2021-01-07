import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { aboutStrings } from "../../../../utils/strings";

export default ({ stats, date }) => {
  const statsList = Object.keys(stats)
  .map((key) => {
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {aboutStrings[key]}
        </TableCell>
        <TableCell>{stats[key].toLocaleString()}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Summary</TableCell>
            <TableCell>{new Date(date).toDateString()}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{statsList}</TableBody>
      </Table>
    </TableContainer>
  );
};
