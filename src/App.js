import React from 'react';
import Header from './components/Header';
import Splash from './components/Splash';
import News from './components/News';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {triggered: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    !this.state.triggered ? this.setState({triggered:true}) : this.setState({triggered: false});
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick} />
        <Splash />
        <News />
        <Booking handleClick={this.handleClick} triggered={this.state.triggered} />
        <Footer />
      </div>
    );
  }
}

export default App;
