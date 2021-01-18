import React, { useMemo, useCallback } from "react";
import { Chart } from "react-charts";
import Styles from "./styles";

export default ({
  data,
  label,
  tooltipLabel,
  tooltipDecimal,
  timeLabel,
  showAxis = true,
  backgroundColor = null,
}) => {
  const classes = Styles();
  const axes = useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        showGrid: false,
        show: showAxis,
        format: (d) => `${d} mins`,
      },
      { type: "linear", position: "left", showGrid: false },
    ],
    []
  );

  const getSeriesStyle = useCallback((_) => {
    return backgroundColor ? { fill: backgroundColor } : {};
  }, []);

  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  const primaryCursor = useMemo(
    () => ({
      render: (props) => (
        <span className={classes.cursor}>
          <span role="img" aria-label="icon">
            {timeLabel}
          </span>{" "}
          {`${(props.resolvedValue
            ? props.resolvedValue.toFixed(2)
            : ""
          ).toString()} mins`}
        </span>
      ),
    }),
    []
  );

  const secondaryCursor = React.useMemo(
    () => ({
      render: (props) => (
        <span className={classes.cursor}>
          <span role="img" aria-label="icon">
            {tooltipLabel}
          </span>{" "}
          {tooltipDecimal
            ? (props.resolvedValue
                ? props.resolvedValue.toFixed(2)
                : ""
              ).toString()
            : (props.formattedValue || "").toString()}
        </span>
      ),
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
        primaryCursor={primaryCursor}
        secondaryCursor={secondaryCursor}
        getSeriesStyle={getSeriesStyle}
      />
    </div>
  );
};
