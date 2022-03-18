import { Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <Grid container>
        <Grid item xs={12}>
          <Typography>List of Posts</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
