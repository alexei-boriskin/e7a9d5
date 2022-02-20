import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import { markMessageAsRead } from "../../store/utils/thunkCreators";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, markMessageAsRead, conversationId } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");
        if (!message.read && message.senderId !== userId) {
          markMessageAsRead({...message, conversationId});
        }

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser} read={message.read}/>
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser}/>
        );
      })}
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    markMessageAsRead: (message) => {
      dispatch(markMessageAsRead(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Messages);
