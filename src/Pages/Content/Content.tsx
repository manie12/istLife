import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Avatar, Grid, Paper, Typography, Box, Drawer } from "@mui/material";
import { stringAvatar } from "../../Utils/avatar";
import { useStyles } from "./styles";
import { getActionPost } from "../../Redux/Actions/postAction";
import { getActionUser } from "../../Redux/Actions/userAction";
import { postTypes, userTypes } from "../../Redux/Types";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Content = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const [userAuth, setUserAuth] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const Postdata = useSelector((state: RootStateOrAny) => state?.posts[0]);

  const userPost = Postdata?.data;

  useEffect(() => {
    dispatch(getActionUser(userPost));
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(getActionPost());
    setItems(userPost);

    setLoading(false);
    return () => {};
  }, [dispatch]);

  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        {userPost &&
          userPost?.map((posts: postTypes) => (
            <Grid container spacing={1} className={classes.gridT}>
              <Grid container item xs={12}>
                <Grid item xs={1}>
                  <Avatar {...stringAvatar("Jacob KIpkurui")} />
                </Grid>
                <Grid item xs={4} alignItems="center">
                  <Grid style={{ marginTop: ".6em" }}>Jacob KIpkurui</Grid>
                </Grid>
                <Grid item xs={7} className={classes.hoverTr}>
                  <Tooltip title="copy" arrow style={{ marginLeft: "6em" }}>
                    <ContentCopyIcon />
                  </Tooltip>
                  <Tooltip title="edit" arrow style={{ marginLeft: "1em" }}>
                    <EditIcon />
                  </Tooltip>
                  <Tooltip title="delete" arrow style={{ marginLeft: "1em" }}>
                    <DeleteIcon />
                  </Tooltip>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography>{posts?.title}</Typography>
              </Grid>

              <Grid style={{ marginBottom: "1em" }}>
                <Typography>{posts.body}</Typography>
              </Grid>
            </Grid>
          ))}
      </Paper>
      <Divider style={{ color: "grey" }} />
    </div>
  );
};

export default Content;
