import React from 'react';
import locations from '../assets/locations';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      spun: false,
      surprise: '',
      surprisetext: '',
      surpriseimage: '',
      surprisedestination: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.bottleClick = this.bottleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const script = document.createElement("script");
    script.src = "https://widgets.skyscanner.net/widget-server/js/loader.js";
    script.async = true;
    document.body.appendChild(script);
  }

  handleScroll = (e) => {
    let distanceScrolled = window.pageYOffset; 
    if (distanceScrolled > e.target.body.children[1].firstElementChild.children[2].offsetTop - 260) {
      this.setState({scrolled: true});
    } else {
      this.setState({scrolled: false});
    }
  }

  bottleClick = (e) => {
    e.target.innerText = 'Spin the bottle again';
    let index = Math.floor(Math.random() * 17); 
    this.setState({
      spun: true,
      surprise: locations[index].surprise, 
      surprisetext: locations[index].text,
      surpriseimage: locations[index].image.default,
      surprisedestination: locations[index].destination
    });
    e.target.parentElement.nextElementSibling.style.display = 'block';
  }

  render() {
    const { scrolled, surpriseimage } = this.state;
    const { triggered } = this.props;
    return (
      <div className={"booking-section" + (!triggered ? " trigger" : " triggered")}>
        <h3 className="booking-sectionHead">Make It Happen</h3>
        <div className="booking-window">
          <div className="booking-content">
            <p>1. <span onClick={this.bottleClick}>Spin the bottle</span> for a surprise location or choose your own.</p>
            <div className="surprise-container">
              <img className="surprise-image" alt={this.state.surprisedestination} src={surpriseimage} />
              <span className="surprise">{this.state.surprise}</span>
              <span className="surprise-text">{this.state.surprisetext}</span>
            </div>
            <p>2. Book your Trip, circle the calendar, and wander away.</p>
            <div className="booking-searchContainer">
              <div data-skyscanner-widget="SearchWidget"></div>
            </div>
          </div>
        </div>
        <span className={"booking-trigger" + (!triggered ? " trigger" : " triggered") + (!scrolled ? " scroll" : " scrolled")} onClick={this.props.handleClick}>Go-Go Adventure</span>
      </div>
    );
  }
}

export default Booking;