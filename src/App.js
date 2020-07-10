import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/Buttons.js';
import Circle from './Components/Circle.js';


class App extends Component {
  constructor() {
    super();
    this.state= {
      message: 'Yo I done did this thing yo!',
      timer: 2700,
      minutes: "45",
      seconds: "00",
      progress: 0
    }
  }

  tick() {
    if(this.state.timer <= 0) {
      alert('Yo you done been productive. Take a break.')
      this.endTimer()
    }
    else {
    const timerUpdate = this.state.timer -1;
    const progressUpdate = this.state.progress + .037037037;
    let minutes = parseInt(this.state.timer/60, 10);
    let seconds = parseInt(this.state.timer%60, 10);
    minutes = minutes < 10 ? minutes = "0" + minutes: minutes;
    seconds =  seconds < 10 ? seconds = "0" + seconds: seconds;
    this.setState({
      timer: timerUpdate,
      minutes: minutes,
      seconds: seconds,
      progress: progressUpdate
    })
    }
  }

  startTimer () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    }

  endTimer (e) {
    clearInterval(this.timerID);
    document.title = 'Time to work'
  }

  render() {
    document.title = this.state.minutes+ ":" + this.state.seconds;
    return (

      <div className="App">
        <h1 className="header">Let's count it down!</h1>
        <Circle
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          radius={175} stroke={5} progress={this.state.progress}
          />
        <Buttons
          start={this.startTimer.bind(this)}
          end={this.endTimer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
