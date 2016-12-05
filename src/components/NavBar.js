import React, { Component } from 'react';
import Rob from './Rob.js';
import '../App.css';

class NavBar extends Component {
	render() {
    // You can use them as regular CSS styles
	    return (
	    	<div id="sidebar" className="NavBar">
			    <Rob />
			</div>
		);
  	}
}

export default NavBar;