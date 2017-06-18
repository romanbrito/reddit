import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class commentForm extends Component {

  state = {
    comment: ''
  };

  // When a user submits...
  handleSubmit = (event) => {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    console.log('comment ' + this.state.comment);
    console.log('postID ' + this.props.params.post_id);

    const data = {};
    data.postID = this.props.params.post_id;
    data.comment = this.state.comment;
    // data.subredditId = this.props.params.subredditId;
    // data.title = this.state.title;
    //
    axios.post('/posts/by-subreddit?_method=PUT', data);

  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <MuiThemeProvider>
          <TextField
            hintText="Comment"
            floatingLabelText="Comment"
            multiLine={true}
            rows={2}
            name="comment"
            type="text"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>
        <br />

        <MuiThemeProvider>
          <RaisedButton
            label={'submit'}
            primary={true}
            onTouchTap={() => {
              console.log('it works')
            }}
            type="submit"
          />
        </MuiThemeProvider>
      </form>
    );
  }
}

export default commentForm;