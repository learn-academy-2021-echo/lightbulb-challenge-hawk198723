import React, { Component } from 'react'
import './App.css'
import LightBox from './components/LightBox'

class App extends Component {

  addBox = () => {
    alert("Add a light box as soon as you prove this branch 😆 （Will make it functional in the third branch，Stay tuned.） ")
  }
  //create a button, not functional yet
  removeBox = () => {
    alert(" Removing 🏃‍♀️🏃（Will make it functional in the third branch，Stay tuned.） ")
  }
  render() {
    return (
      <>
        <h1>Light Bulb Challenge</h1>
        <button onClick={this.addBox} class="button">
          Add Light Box
        </button>
        <button onClick={this.removeBox} class="button">
          Remove Light Box
        </button>

        <LightBox />
       
      </>
    )
  }
}

export default App