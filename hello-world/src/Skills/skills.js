import React, {Component} from 'react';
import Scroll from 'react-scroll';





var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;



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
                <div className="skill-margin-top">
                    <div className="text-align-center caps fw900">
                        Skills
                    </div>
                    <div className="skills-description text-align-center fw300">Some of my favorite frameworks / environments.
                    </div>
                </div>
                <div className="flex-wrap jc-space-around skill-bottom-padding">


                        <div className="flex skill-thirds">
                            <div className="circle-border ">
                                <i className="fa fa-code fa-1x about-icons fa-custom-circle"></i>
                            </div>
                            <div >
                                <div className="skill-title fw900">JS</div>

                                <li className="sub-skills-bullets fw300">React</li>
                                <li className="sub-skills-bullets fw300">jQuery</li>
                                <li className="sub-skills-bullets fw300">Angular</li>
                                <li className="sub-skills-bullets fw300">Brackets</li>
                            </div>
                        </div>

                        <div className="flex skill-thirds">
                            <div className="circle-border ">
                                <i className="fa fa-desktop fa-1x about-icons fa-custom-circle"></i>
                            </div>
                            <div className="skill-title fw900">
                                <div className="skill-title fw900">UI / UX</div>

                                <li className="sub-skills-bullets fw300">HTML & CSS</li>
                                <li className="sub-skills-bullets fw300">Illustrator</li>
                                <li className="sub-skills-bullets fw300">Code Pen</li>
                                <li className="sub-skills-bullets fw300">Sketch</li>
                            </div>
                        </div>
                        <div className="flex skill-thirds">
                            <div className="circle-border ">
                                <i className="fa fa-rocket fa-1x about-icons fa-custom-circle"></i>
                            </div>
                            <div className="skill-title fw900">
                                <div className="skill-title fw900">LAUNCH</div>
                                <li className="sub-skills-bullets fw300">Mongo</li>
                                <li className="sub-skills-bullets fw300">Git Hub</li>
                                <li className="sub-skills-bullets fw300">Herouku</li>
                                <li className="sub-skills-bullets fw300">Sql</li>
                            </div>
                        </div>


                </div>

            </div>
        );
    }
}

export default Skills;
