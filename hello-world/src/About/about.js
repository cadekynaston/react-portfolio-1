import React, { Component } from 'react';



class About extends Component {
	render() {
		return (
			<div className="flex flex-direction-columnn">

                <div className="text-align-center caps">
                    Things i like
                </div>
                <div className="flex jc-space-around">
                    <div>Code</div>
                    <div>Music</div>
                    <div>Health / fitness</div>
                    <div>Sleep</div>
                </div>

			</div>
		);
	}
}

export default About;
