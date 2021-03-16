import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Advertisement = props =>(
	<tr>
		<td>{props.ad.adName}</td>
		<td>{props.ad.adType}</td>
	</tr>
)

export default class adList extends Component {

	constructor(props){
		super(props);
		this.state = {ads: []};
	}

	componentDidMount(){
		axios.get('http://localhost:4000/')
		.then(response =>{
			this.setState({ ads: response.data.ads });
		})
		.catch(function(error){
			console.log(error);
		})
	}

	adList(){
		return this.state.ads.map(function(currentad, i){
			return <Advertisement ad={currentad} key={i} />;
		})
	}

	render(){
		return(
			<div>
				<h3>Advertisements</h3>
				<table className="table table-striped" style={{marginTop: 20 }}>
					<thead>
						<tr>
							<th>Advertisement name</th>
							<th>Advertisement Type</th>
						</tr>
					</thead>
					<tbody>
					{ this.adList() }
					</tbody>
				</table>
			</div>
		)
	}
}
