import React from "react";

function Navbar(props) {
	return (
		<div className="row sticky-top">
			<div className="col-1 bg-dark" />
			<div className="col-10 bg-dark">
				<nav className="navbar ">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<ul className="list-inline">
						<li className="list-inline-item">
							<a href="#">Home</a>
						</li>
						<li className="list-inline-item">
							<a href="#">About</a>
						</li>
						<li className="list-inline-item">
							<a href="#">Services</a>
						</li>
						<li className="list-inline-item">
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="col-1 bg-dark" />
		</div>
	);
}
export default Navbar;
