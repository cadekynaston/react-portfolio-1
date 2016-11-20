import React, { Component } from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

class Landing extends Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }
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
						<a onClick={() => scroll.scrollTo(2000)}>	<i className="fa fa-angle-down fa-fw"></i></a>

          			</div>
        </div>

			</div>
		);
	}
}

export default Landing;
