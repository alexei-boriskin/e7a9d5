import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  readBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 17,
  },
  unreadNumber: {
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "bold",
    color: "#FFFFFF",
    padding: 7,
    background: "#3F8EFF",
    borderRadius: "50%",
    minWidth: "34px",
    textAlign: "center"
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;
  let unreadNumber = 0
  conversation?.messages?.forEach(message => {
    if (!message.read && message.senderId === conversation.otherUser.id) unreadNumber++
  });

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box className={classes.readBox}>
        {unreadNumber > 0 ? <Typography className={classes.unreadNumber}>{unreadNumber}</Typography> : null}
      </Box>
    </Box>
  );
};

export default ChatContent;
