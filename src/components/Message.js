import React, { Component } from 'react';

class Message extends Component {
  constructor(params) {
    super();

    this.state = {
      message: 'Welcome visitor',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing',
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
