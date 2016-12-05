import React, { Component } from 'react';




let projects = [
	{url:'https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/15069004_10155196765331754_4116709789900966839_o.jpg',
		name:'michael',
		description:'This is an app',
		id:'web',
		src:'',
	},
	{url:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/35845_1300231667680_7755683_n.jpg?oh=d806d86304eb4c1e4938533ee7d9d325&oe=58F38CB0',
		name:'kelly',
		description:'This is an app',
		id:'web',
		src:'',
	}
	,
	{url:'https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/12240288_1222972601053534_1288458191114782947_o.jpg',
		name:'cade',
		description:'This is an app',
		id:'app',
		src:'',
	}
]

// clicking on ID and apply this keyword to "active" which can hide all others and only show the "active" elements within that Component
let projectGroups =["all" , "web", "music", "app"];




class Portfolio extends Component {

	constructor(props){
		super(props)
		this.state = {filterValue:'all'};

	}
	 sortProjects(e){
		 console.log(e.target);
		 this.setState({filterValue:e.target.dataset.value});

	}
	render() {
		let project = projects.filter(data => this.state.filterValue === "all"|| data.id === this.state.filterValue).map(function(data, i ){

			return <div className='flex jc-center' value={data.id} key={i}>
				<img alt=''className="project-image"src={data.url}/>
				<p className="fw100 project-subtext text-align-center">{data.name}</p>
			</div>
		})

		console.log(this.state.filterValue, "ALL THE LONELY PEOPLE");
		console.log(this);
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

				<div className="jc-center flex">
					{project}
				</div>
			</div>
		)
	}
}

export default Portfolio;
