import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { aboutStrings } from "../../../../utils/strings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faPaw,
  faChartArea,
  faHeart,
  faHeartbeat,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const keyToIcon = {
  totalKilocalories: faBatteryFull,
  totalSteps: faPaw,
  totalDistanceMeters: faChartArea,
  floorsAscended: faArrowUp,
  floorsDescended: faArrowDown,
  minHeartRate: faHeart,
  maxHeartRate: faHeart,
  restingHeartRate: faHeart,
  lastSevenDaysAvgRestingHeartRate: faHeartbeat,
};

export default ({ stats, date }) => {
  const statsList = Object.keys(stats).map((key) => {
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          <FontAwesomeIcon icon={keyToIcon[key]} size="1x" />{" "}
          {aboutStrings[key]}
        </TableCell>
        <TableCell>{Math.floor(stats[key]).toLocaleString()}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>{statsList}</TableBody>
      </Table>
    </TableContainer>
  );
};
