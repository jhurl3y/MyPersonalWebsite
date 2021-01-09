import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Typography from "@material-ui/core/Typography";
import { aboutStrings } from "../../../../utils/strings";

export default ({
  highlyActiveSeconds,
  activeSeconds,
  sedentarySeconds,
  date,
}) => {
  const [hovered, setHovered] = useState(null);
  const data = [
    {
      title: aboutStrings.highlyActiveSeconds,
      value: highlyActiveSeconds,
      color: "#d92e3c",
    },
    {
      title: aboutStrings.activeSeconds,
      value: activeSeconds,
      color: "#eb9a0e",
    },
    {
      title: aboutStrings.sedentarySeconds,
      value: sedentarySeconds,
      color: "#29941f",
    },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" align="center" style={{ marginBottom: -30 }}>
        {`${aboutStrings.activeLevels} - ${new Date(date).toDateString()}`}
      </Typography>
      <PieChart
        data={data}
        label={({ dataEntry, dataIndex }) =>
          hovered === dataIndex
            ? `${parseFloat(dataEntry.value / 60 / 60).toFixed(2)} hrs`
            : dataEntry.title
        }
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: "4px",
          fontFamily: "sans-serif",
        })}
        onMouseOver={(_, index) => setHovered(index)}
        onMouseOut={() => setHovered(null)}
        labelPosition={70}
        paddingAngle={18}
        lineWidth={20}
        radius={40}
        animate
        rounded
      />
    </React.Fragment>
  );
};
