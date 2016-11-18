import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './Skills/skills.js';
import Header from './Header/header.js';
import Landing from './Landing/landing.js';
import Scroll from 'react-scroll';
import Logo from './Header/img/mh-logo-white.png';

import Portfolio from './Portfolio/portfolio.js'

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

class App extends Component {
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
            <div className="App">
                <div className="header-menu">
                    <div className="header-logo">
                        <img src={Logo}/>
                    </div>
                    <div className="header-space"></div>

                    <div className="menu-items">
                        <p>
                            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={1000}>About</Link>
                        </p>
                        <p>
                            <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Process</Link>
                        </p>
                        <p>
                            <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>Work</Link>
                        </p>
                        <p>
                            <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Contact</Link></p>

                    </div>

                </div>
            

                <Element name="test1" className="element intro-wallpaper">

                    <Header/>
                    <Landing />

                </Element>

                <Element name="test2" className="element">
                    <Skills/>
                </Element>

                <Element name="test3" className="element">
                    <Portfolio/>
                </Element>

                <Element name="test4" className="element"></Element>

                <Element name="test5" className="element">
                    test 5
                </Element>

                <div id="anchor" className="element">
                    test 6 (anchor)
                </div>
                <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a>
                <a onClick={this.scrollToTop}>To the top!</a>

            </div>
        );
    }
}

export default App;
