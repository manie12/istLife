import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import {useStyles} from './styles';

const Filter = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item xs={10}>
          <TextField type="text" label="Enter Loan Amount" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <Box className={classes.button}>
          <Button  variant="contained" color="primary">
            Rest
          </Button>
          </Box>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Filter;
