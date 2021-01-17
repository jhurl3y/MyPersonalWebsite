import React from "react";
import { Chart } from "react-charts";
import Styles from "./styles";

export default ({
  data,
  label,
  tooltipLabel,
  tooltipDecimal,
  showAxis = true,
  backgroundColor = null,
}) => {
  const classes = Styles();

  const axes = React.useMemo(
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

  const getSeriesStyle = React.useCallback((series) => {
    return backgroundColor ? { fill: backgroundColor } : {};
  }, []);

  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );

  const primaryCursor = React.useMemo(
    () => ({
      render: (props) => (
        <span style={{ fontSize: "1rem" }}>
          <span role="img" aria-label="icon">
            🕑
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
        <span style={{ fontSize: "1rem" }}>
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
