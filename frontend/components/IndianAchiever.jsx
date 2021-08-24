import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
    height:150,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function IndianAchiever({ athleteImage, name, medals, sports_category}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={6}>
      <CardMedia className={classes.cover} image={athleteImage} title={name} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Medals : {medals}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Category : {sports_category}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
export default IndianAchiever;
