import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1>Wander&#8466;ust</h1>
        <span onClick={this.props.handleClick}>Go-Go Adventure</span>
      </div>
    );
  }
}

export default Header;
