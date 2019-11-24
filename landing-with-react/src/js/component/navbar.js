import React from "react";

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container">
				<a
					className="navbar-brand text-white size-letter-navbar"
					href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse nav-style"
					id="navbarSupportedContent">
					<ul className="navbar-nav m-0">
						<li className="nav-item list-style">
							<a
								className="text-white size-lettero-navbar"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item list-style">
							<a
								className="text-muted size-lettero-navbar"
								href="#">
								About
							</a>
						</li>
						<li className="nav-item list-style">
							<a
								className="text-muted size-lettero-navbar"
								href="#">
								Services
							</a>
						</li>
						<li className="nav-item list-style">
							<a
								className="text-muted size-lettero-navbar"
								href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
