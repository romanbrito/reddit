import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import commentForm from './commentForm';

import { Router, Route, Link } from 'react-router';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: {comments: []}
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

        {/* This code will allow us to automatically dump the correct GrandChild component */}
        {this.props.children}




        <div className="container">
          <h2>Coments</h2>

          <Link to={"/" + this.state.post.subredditId + "/" + this.state.post._id + "/" + "comments"}>
          <MuiThemeProvider>
            <RaisedButton
              label={'Create New Comment'}
              primary={true}
              onTouchTap={() => {
                console.log('it works')
              }}
              type="text"
            />
          </MuiThemeProvider>
          </Link>


          <ul className="list-group">
            {this.state.post.comments.map((item, i) => (
              <li key={i} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>


    );
  }
}
