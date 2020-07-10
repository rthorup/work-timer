import React, {Component} from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
  render() {
  const { radius, stroke, progress } = this.props;
  const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

  return (
    <div className="circleContainer">
    <svg className="circle"
      height={radius * 2}
      width={radius * 2}
      >
      <circle
        stroke="black"
        fill="grey"
        strokeWidth={ stroke }
        strokeDasharray={ this.circumference + ' ' + this.circumference }
        style={ { strokeDashoffset } }
        r={ this.normalizedRadius }
        cx={ radius }
        cy={ radius }
        />
      <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="80px" fontFamily="Arial" dy=".3em">{this.props.minutes}:{this.props.seconds}</text>
    </svg>
  </div>
  );
}
}



export default Circle;
