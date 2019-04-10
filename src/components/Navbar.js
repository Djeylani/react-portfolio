import React, { Component } from 'react'
import logo from './assets/PNG/1.png';

class Navbar extends Component {

  render() {
    const { home, about, info, contact } = this.props.nav;
    return (
      <div>
      <div className="nav-brand">
          <img src={logo} alt="logo" />
          <h1>My Brand</h1>
      </div>
        <nav className="navbar">
        <ul>
           <li>
             <a href="App">{home}</a>
           </li>
           <li>
             <a href="#">{about}</a>
           </li>
           <li>
             <a href="#">{info}</a>
           </li>
           <li>
             <a href="#">{contact}t</a>
           </li>
         </ul>
        </nav>        
      </div>
    )
  }
}

export default Navbar
