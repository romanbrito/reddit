import React, {Component} from 'react';

import axios from 'axios';
import ListItem from './ListItem';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    axios.get('/posts/by-subreddit/' + this.props.params.subredditId + "/" + this.props.params.post_id).then(post => {
      this.setState({post: post.data});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.subredditId !== nextProps.params.subredditId) {
      axios.get('/posts/by-subreddit/' + nextProps.params.subredditId + "/" + nextprops.params.post_id).then(post => {
        this.setState({post: post.data});
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.content}</p>

      </div>


    );
  }
}