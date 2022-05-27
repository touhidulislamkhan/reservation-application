import React from 'react';
import './navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navContainer">
				<div className="logo">BookNow</div>
				<div className="navItems">
					<button className="navButton">Login</button>
					<button className="navButton">Register</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
