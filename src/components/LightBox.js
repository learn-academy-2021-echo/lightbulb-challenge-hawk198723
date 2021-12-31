import React, { Component } from 'react'
import white from '../images/lightOff.png' //create a images dir under src, and put four images in it
import yellow from '../images/lightOn.png'
import OFF from '../images/switchOff.png'
import ON from '../images/switchOn.png'
//creates LightBox class
class LightBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ["white", "yellow"],  // array of two colors
            lightStatus: ["OFF", "ON"],  // array of two status
            index: 0 // index is the position of the array, in this case: 0 ===> "OFF" ===> "white" (by default)
        }
    }
    // status setter
    changeStatus = () => {
        //this.state.index will always change between 0 and 1, since index modular by 2, the result will always be 0 or 1, aka "OFF" and "ON"
        this.setState({ index: (this.state.index + 1) % 2 })
        //alert("Yo!")
    }
    //create a button, not functional yet

    render() {
        return (
            // style={{background: this.state.color[this.state.index] is set the background color base on the index
            // onClick = {this.changeStatus} when the box get clicled, call the changeStatus function
            // {this.state.lightStatus[this.state.index]} show the text status in the box
            // use Ternary Operator to check the index === 0 or not, I think use true or false in the very beginning might be a little bit easier
            <>
                <div onClick={this.changeStatus} >

                    {this.state.index === 0 ?

                        (<> <img src={ON} height={50} width={100} alt="Switch On" />
                            <div></div>
                            <img src={white} height={289} width={230} alt="Light is On" /> </>)
                        :
                        (<> <img src={OFF} height={50} width={100} alt="Switch Off" />
                            <div></div>
                            <img src={yellow} height={289} width={230} alt="Light is Off" /> </>)
                    }
                </div>

            </>
        )
    }
}
//export the class LightBox, make it available to use
export default LightBox