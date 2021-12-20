import React, { Component } from 'react'

class SquareBox extends Component{
    constructor(props){
      super(props)
      this.state = {
        color: ["white", "yellow"],    
        lightStatus: ["OFF", "ON"],
        index: 0
      }
    }
    changeStatus = () => {
        
        this.setState({index: (this.state.index + 1) % 2 })
        //alert("Yo!")
    }
    addBox = () => {
        alert("Add a light box as soon as you prove this branch 😆 （Will make it functional in the third branch，Stay tuned.） ")
    }
    removeBox = () => {
        alert(" Removing 🏃‍♀️🏃（Will make it functional in the third branch，Stay tuned.） ")
    }
    render(){
      return(
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
  
  export default SquareBox