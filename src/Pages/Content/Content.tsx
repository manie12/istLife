import { Avatar, Grid, Paper, Typography ,Box} from "@mui/material";
import React from "react";
import { stringAvatar } from "../../Utils/avatar";
import {useStyles} from './styles';

const Content = () => {
const classes = useStyles();

  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Avatar {...stringAvatar("Jacob Kipkurui")} />
          </Grid>
          <Grid item xs={11} alignItems="center">
            <Typography style={{marginTop:".6em"}}>Jacob Kipkurui</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography >Title</Typography>
          </Grid>
          <Grid>
            <Typography>JHFDKJHGJHDFKSJHGKDFGLJHKL</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Content;
