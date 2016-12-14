import React, { Component } from 'react';
import projects from './projects.js';

// clicking on ID and apply this keyword to "active" which can hide all others and only show the "active" elements within that Component
let projectGroups =["all" , "web", "music", "app"];

class Portfolio extends Component {

	constructor(props){
		super(props)
		this.state = {filterValue:'all'};
	}
	 sortProjects(e){
		 this.setState({filterValue:e.target.dataset.value});
	}
	render() {


		let project = projects.filter(data => this.state.filterValue === "all"|| data.id === this.state.filterValue).map(function(data, i ){
			return <div className='flex-wrap jc-center ' value={data.id} key={i}>
									<div>
										<img alt=''className="project-image"src={data.url}/>
									
									</div>

							</div>
						})

		let projectSelection = projectGroups.map((name, i) => {

			return <div data-value={name} className="project-subtext project-buttons app fw900"key={name} onClick={this.sortProjects.bind(this)}>{name} </div>

		});
		return (
			<div>
				<div className="text-align-center caps fw900">
					Projects
				</div>
				<div className="text-align-center fw100 project-subtext">
					Here is a mix of projects i've done.
				</div>
				<div className="flex jc-center">
					{projectSelection}
				</div>
				<div className="jc-center flex-wrap max-width">
					{project}
				</div>
			</div>
		)
	}
}
export default Portfolio;
