// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
    state = {speed: 0}

    onAccelerate = () => {
        this.setState(prevState =>
            if (prevState.speed<200){
                {speed:prevState.speed+10}
                
            }
        
        }
    onBrake= () => {
        this.setState(prevState =>
            if (prevState.speed>0){
                {speed:prevState.speed+10}
                
            }
        
        }

  

    render() {
        const { speed } = this.state

        return (
        <div className="container">
            <h1 className="mainheading">SPEEDOMETER</h1>

            <img
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            />

            <p className="para1">Speed is {speed}mph</p>
            <p className="para2">Min Limit is 0mph,Max Limit is 200mph</p>
            <div className="buttonscontainer">
            <button
                type="button"
                className="accelaratebutton"
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



