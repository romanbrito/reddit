import React, { Component } from 'react';
import {Link} from 'react-router';

export default class ListItem extends Component {
	render() {
		return (
			<li>

				<Link to={"/" + this.props.post.subredditId + this.props.post._id}>

				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.content}</p>

        </Link>
			</li>
		);
	}
}
