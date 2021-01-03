import React, { useState } from "react";
import Styles from "./styles";
import { fetchGarmin } from "../../../utils/helpers";

export default () => {
  const classes = Styles();
  const [garminData, setGarminData] = useState(null);

  if (!garminData) {
    fetchGarmin("name").then((res) => setGarminData(res));
  }

  return (
    <div className={classes.garmin}>
      {garminData ? garminData.name : "loading"}
    </div>
  );
};
