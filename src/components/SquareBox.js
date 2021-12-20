import React, { Component } from 'react'
//creates SquareBox class
class SquareBox extends Component{
    constructor(props){
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
        this.setState({index: (this.state.index + 1) % 2 })
        //alert("Yo!")
    }
    //create a button, not functional yet
    addBox = () => {
        alert("Add a light box as soon as you prove this branch 😆 （Will make it functional in the third branch，Stay tuned.） ")
    }
    //create a button, not functional yet
    removeBox = () => {
        alert(" Removing 🏃‍♀️🏃（Will make it functional in the third branch，Stay tuned.） ")
    }
    render(){
      return(
        // style={{background: this.state.color[this.state.index] is set the background color base on the index
        // onClick = {this.changeStatus} when the box get clicled, call the changeStatus function
        // {this.state.lightStatus[this.state.index]} show the text status in the box
        <>
         <button onClick = {this.addBox} class = "button">
             Add Light Box
         </button>
         <button onClick = {this.removeBox} class = "button">
             Remove Light Box
         </button>
         <div id = "square"  onClick = {this.changeStatus} style={{background: this.state.color[this.state.index]}}>
             <h2>{this.state.lightStatus[this.state.index]} </h2>
         </div>
         
        </>
      )
    }
  }
  //export the class SquareBox, make it available to use
  export default SquareBox