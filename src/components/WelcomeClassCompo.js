import React, { Component } from 'react';

class WelcomeClassCompo extends Component {
  render() {
    return (
      <div>
        <h4>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h4>
        {this.props.children}
      </div>
    );
  }
}

export default WelcomeClassCompo;
