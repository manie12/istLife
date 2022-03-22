import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  paper: {
    marginTop: "3em",
    padding: "1em 2em",
  },
  gridT: {
    backgroundColor: "#fcfcfc",
    color: "#000000",
    "&:hover": {
      backgroundColor: "#666666",
      color: "#fcfcfc",
    },
  },
  title: {
    fontWeight: "900",
  },
  hoverTr: {
    display: "block",
    "&:hover": {
      display: "none",
      background:'black'
    },
  },
});
