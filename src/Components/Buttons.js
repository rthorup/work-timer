import React, {Component} from 'react';

class Buttons extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.start}>Start Timer</button>
        <button onClick={this.props.end.bind(this, {people: "yo"})}>End Timer</button>
      </div>
    )
  }
}

export default Buttons;
