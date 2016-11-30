import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Portfolio from '../Portfolio/portfolio.js'

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};


class Skills extends Component {
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
        <div>
            <div className="text-align-center caps fw900 i-like">
                Skills
            </div>
            <div className="skills-description text-align-center fw300">Some of my favorite frameworks / environments. </div>

            <div className="flex jc-center">
                <div className="flex">
                    <div>LOGO</div>
                    <div>JS</div>
                </div>
                <div className="flex">
                    <div>LOGO</div>
                    <div>UI / UX</div>
                </div>
                <div className="flex">
                    <div>LOGO</div>
                    <div>LAUNCH</div>
                </div>


            </div>

        </div>
    );
  }
}

export default Skills;
