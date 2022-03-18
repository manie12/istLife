import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Grid, Paper, Typography, Box } from "@mui/material";
import { stringAvatar } from "../../Utils/avatar";
import { useStyles } from "./styles";
import { getActionPost } from "../../Redux/Actions/postAction";
import { useSelect } from "@mui/base";
import { postTypes } from "../../Redux/Types";

const Content = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const Postdata = useSelector((state) => state);


  useEffect(() => {
    dispatch(getActionPost());

    return () => {};
  }, [dispatch]);

  console.log(Postdata);
  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Avatar {...stringAvatar("Jacob Kipkurui")} />
          </Grid>
          <Grid item xs={11} alignItems="center">
            <Typography style={{ marginTop: ".6em" }}>
              Jacob Kipkurui
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Title</Typography>
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
