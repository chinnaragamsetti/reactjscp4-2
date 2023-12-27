// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState + 10}))
  }
  onBrake = () => {
    this.setState(prevState => ({speed: prevState - 10}))
  }
  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="mainheading">SPEEDOMETER</h1>
        <div className="imagecontainer">
          <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" />
        </div>

        <p className="para1">Speed is {0}mph</p>
        <p className="para2">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="buttoncontainer">
          <button className="accelaratebutton" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brakebutton" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
