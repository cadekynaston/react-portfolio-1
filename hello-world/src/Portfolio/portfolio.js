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
let sortProjects = function(projects){
	console.log('In sortProjects');
	console.log('idiot');
	console.log(project)

}
// clicking on ID and apply this keyword to "active" which can hide all others and only show the "active" elements within that Component
let projectGroups =["all" , "web", "music", "app"];
let projectSelection = projectGroups.map(function(name, i){

	return <div value={name} className="project-subtext project-buttons app fw900"key={name} onClick={this}>{name} </div>

});
let project = projects.map(function(data, i ){

	return <div className='flex jc-center' value={data.id} key={i}>
		<img alt=''className="project-image"src={data.url}/>
		<p className="fw100 project-subtext text-align-center">{data.name}</p>
	</div>
})

console.log(project)
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
