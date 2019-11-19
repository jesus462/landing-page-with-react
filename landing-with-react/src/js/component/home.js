import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import CardGallery from "./cardGallery.js";
import Footer from "./footer.js";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<navbar />
		</React.Fragment>
	);
}
