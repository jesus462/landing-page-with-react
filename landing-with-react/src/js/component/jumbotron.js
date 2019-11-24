import React from "react";

function Jumbotron(props) {
	return (
		<div className="container jumbo-margin">
			<div className="row">
				<div className="col-12">
					<div className="jumbotron">
						<h1 className="display-2">A Warm Welcome!</h1>
						<p className="lead size-letter-navbar">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Ipsa, ipsam, eligendi, in quo sunt possimus
							non incidunt odit vero aliquid similique quaerat nam
							nobis illo aspernatur vitae fugiat numquam repellat.
						</p>
						<p className="lead">
							<a
								className="btn btn-primary btn-lg size-letter-navbar"
								href="#"
								role="button">
								Call to action!
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jumbotron;
