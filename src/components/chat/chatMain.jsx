import React, { Component } from "react";
import { connect } from "react-redux";

import LeftPanel from "./chatComponents/leftPanel/leftPanel";
import ChatMessagePanel from "./chatComponents/chatMessagesPanel/chatMessagePanel";
import RightPanel from "./chatComponents/rightPanel/rightPanel";
import { socketioConnection } from "../../actions/socketioActions";
import "./chatPage.css";

class ChatMain extends Component {
  state = {};

  componentDidMount() {
    //call the socketioConnection here
    this.props.socketioConnection();
  }

  render() {
    return (
      <div className="chatMain">
        <LeftPanel />
        <ChatMessagePanel />
        <RightPanel />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  socket: state.socket,
});

export default connect(mapStateToProps, { socketioConnection })(ChatMain);
