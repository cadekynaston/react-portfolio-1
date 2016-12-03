import React, { Component } from 'react';



class Portfolio extends Component {
	render() {
		return (
			<div>
				<div className="text-align-center caps fw900">
					Projects
				</div>
				<div className="text-align-center fw100 project-subtext">
					Here is a mix of projects i've done.
				</div>
				<div className="flex jc-center">
					<div className="fw900 project-subtext project-buttons">All</div>
					<div className=" fw900 project-subtext project-buttons">app</div>
					<div className="fw900 project-subtext project-buttons">Web</div>
					<div className="fw900 project-subtext project-buttons">Music</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
