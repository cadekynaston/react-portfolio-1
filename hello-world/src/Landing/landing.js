import React, { Component } from 'react';



class Landing extends Component {
	render() {
		return (
			<div className = "landing-page">
				<div className="intro-content">

					<div className="landing-text">

						Michael<br/>
						Harvey
					</div>
					<div className="landing-text-subtext">

						Web Developer<br/>
						<i className="fa fa-code" aria-hidden="true"></i>
					</div>
					
				</div>
				 <div className="scroll-down">
          			<div>
          			<i className="fa fa-angle-down fa-fw"></i>
          			</div> 
        </div>
			
			</div>
		);
	}
}

export default Landing;
