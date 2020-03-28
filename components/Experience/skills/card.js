import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Styles from "./styles";

export default ({ title, content, icon }) => {
  const classes = Styles();

  return (
    <Card className={classes.card} raised>
      <CardContent>
        {icon()}
        <Typography
          className={classes.cardTitle}
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        <div
          className={classes.cardContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  );
};
