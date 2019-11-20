import React from "react";

function Jumbotron(props) {
	return (
		<div className="row">
			<div className="col-1" />
			<div className="col-10">
				<div className="jumbotron">
					<h1 className="display-4">A Warm Welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Call to action!
						</a>
					</p>
				</div>
			</div>
			<div className="col-1" />
		</div>
	);
}

export default Jumbotron;
