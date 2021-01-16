import React from "react";
import { Chart } from "react-charts";
import Styles from "./styles";

export default ({ data, label }) => {
  const classes = Styles();

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  return (
    <div className={classes.chart}>
      <Chart
        data={[
          {
            label,
            data,
          },
        ]}
        axes={axes}
        series={series}
        tooltip
      />
    </div>
  );
};
