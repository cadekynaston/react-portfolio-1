import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="flex flex-direction-columnn ">

                <div className="text-align-center caps fw900 i-like">
                    Things i like
                </div>
                <div className="flex-wrap jc-space-around ">
                    <div className="about-content flex flex-direction-columnn">
                        <i className="fa fa-code fa-fw fa-1x about-icons"></i>
                        <div className="about-content-title">
                            Code
                        </div>
						<div className="about-subcontent fw300">It's a simple medium of infinite possibility. All you need is a computer, you can make anything.</div>
                    </div>
                    <div className="about-content flex flex-direction-columnn">
                        <i className="fa fa-play-circle-o fa-fw fa-1x about-icons"></i>
                        <div className="about-content-title">
                            Music
                        </div>
						<div className="about-subcontent fw300">I am a Singer / Songrwitter, you will find me singing to myself a lot.</div>
                    </div>
                    <div className="about-content flex flex-direction-columnn">
                        <i className="fa fa-heart-o fa-fw fa-1x about-icons"></i>
                        <div className="about-content-title">
                            Health / fitness
                        </div>
						<div className="about-subcontent fw300">Keeping my self healthy through diet and crossfit</div>
                    </div>
                    <div className="about-content flex flex-direction-columnn">
                        <i className="fa fa-hotel fa-fw fa-1x about-icons"></i>
                        <div className="about-content-title">
							Sleep
                        </div>
						<div className="about-subcontent fw300">Nothing better than getting a good 8 hours of sleep at night.</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;
