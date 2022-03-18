import React from "react";
import { TextField, Button, Grid ,Box} from "@mui/material";
import { useStyles } from "./styles";

const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={10}>
          <TextField
            id="Type body of Text here"
            label="Type body of Text here"
            fullWidth
          />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.button}>
          <Button variant="contained" color="primary">SUBMIT</Button>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
