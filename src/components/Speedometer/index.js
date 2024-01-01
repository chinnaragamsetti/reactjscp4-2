// Write your code here


import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="mainheading">SPEEDOMETER</h1>

        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
        />

        <h1 className="para1">Speed is {speed}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonscontainer">
          <button
            type="button"
            className="acceleratebutton"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="brakebutton" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer



