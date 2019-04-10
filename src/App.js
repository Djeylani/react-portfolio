import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      value: 'picsum',
      nav: {
        home: 'Home',
        info: 'Info',
        about: 'About',
        contact: 'Contact'
      },
      randomIndex: ''
    }
    this.addValue = this.addValue.bind(this);
  //  this.handleChange = this.handleChange.bind(this);
  }

  // handleChange() {
  //   this.setState({
  //     randomIndex: Math.floor(Math.random() * 10)
  //   });
  // }

  addValue() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 10),
      value: ''
    });
  }


  render() { 
    return (
      <div className="App">
        <header className="App-header">
         <Navbar nav={this.state.nav} />
        </header>
        <Showcase value={this.state.value} addValue={this.addValue} randomIndex={this.state.randomIndex}/>
      </div>
    );
  }
}

export default App;
