import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Typography from "@material-ui/core/Typography";
import { aboutStrings } from "../../../../utils/strings";
import {
  COLORS,
  SUMMARY_PIE_POSITION,
  SUMMARY_PIE_ANGLE,
  SUMMARY_PIE_LINE_WIDTH,
  SUMMARY_PIE_RADIUS,
} from "../../../../utils/constants";
import Styles from "./styles";

export default ({
  highlyActiveSeconds,
  activeSeconds,
  sedentarySeconds,
  sleepingSeconds,
}) => {
  const classes = Styles();
  const [hovered, setHovered] = useState(null);
  const data = [
    {
      title: aboutStrings.highlyActiveSeconds,
      value: highlyActiveSeconds,
      color: COLORS.red,
    },
    {
      title: aboutStrings.activeSeconds,
      value: activeSeconds,
      color: COLORS.orange,
    },
    {
      title: aboutStrings.sedentarySeconds,
      value: sedentarySeconds,
      color: COLORS.green,
    },
    {
      title: aboutStrings.sleepingSeconds,
      value: sleepingSeconds,
      color: COLORS.blue,
    },
  ].filter(({ value }) => value > 0);

  return (
    <React.Fragment>
      <Typography variant="h6" align="center" className={classes.title}>
        {aboutStrings.activeLevels}
      </Typography>
      <PieChart
        data={data}
        label={({ dataEntry, dataIndex }) =>
          hovered === dataIndex
            ? `${parseFloat(dataEntry.value / 60 / 60).toFixed(2)} hrs` // convert secs to hours
            : dataEntry.title
        }
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: "4px",
          fontFamily: "sans-serif",
        })}
        onMouseOver={(_, index) => setHovered(index)}
        onMouseOut={() => setHovered(null)}
        labelPosition={SUMMARY_PIE_POSITION}
        paddingAngle={SUMMARY_PIE_ANGLE}
        lineWidth={SUMMARY_PIE_LINE_WIDTH}
        radius={SUMMARY_PIE_RADIUS}
        animate
        rounded
      />
    </React.Fragment>
  );
};
