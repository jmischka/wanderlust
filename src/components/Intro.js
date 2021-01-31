import icon from '../assets/baseline_flight_black_48dp.png';

function Intro() {
    return (
      <div className="splash-intro">
        <div className="intro-text">
          <p>Start your fantasy. Discover your next travel adventure.</p>
        </div>
        <figure>
          <img alt="airplane icon" src={icon} />
        </figure>
      </div>
    );
  }
  
  export default Intro;
  