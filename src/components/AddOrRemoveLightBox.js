import React, { Component } from "react";
import LightBox from "./LightBox";
// import LightBox from './components/LightBox'

class AddOrRemoveLightBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightsArray: []
        }
    }
    //create a addbox function, whenever it's got called, it's going to add a lightbox
    addBox = () => {
        //use spread operater without considering the lightarray is empty or not
        this.setState({ lightsArray: [...this.state.lightsArray, <LightBox />] })
        // alert("adding")
    }
    //create a removebox function, whenever it's got called, it's going to remove a lightbox
    removeBox = (index) => {
        //use if-else statement to check the array is null or not,if the array is not empty 
        if (this.state.lightsArray[0] != null) {
            //alert("removing")
            //declare a array, using spread operator
            let arrayLeft = [...this.state.lightsArray]
            // pop out the last element of the array
            arrayLeft.pop()
            //set the state
            this.setState({ lightsArray: arrayLeft })
        } else
        //if the array is empty, give out a alert
            alert(`No more lights to remove.`)
    }
//in the render display two buttons on the page
    render() {
        return (
            <>
                <div>
                    <button onClick={this.addBox} className="button">
                        Add Light Box
                    </button>
                    <button onClick={this.removeBox} className="button">
                        Remove Light Box
                    </button>
                </div>
                <div className="bulbs">
                    {this.state.lightsArray}
                </div>

            </>
        );

    }
}
export default AddOrRemoveLightBox
