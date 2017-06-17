import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

class Form extends Component {

  state = {
    title: '',
    content: ''
  };

  // When a user submits...
  handleSubmit = (event) => {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    console.log('title ' + this.state.title);
    console.log('content ' + this.state.content);

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
            hintText="Title"
            floatingLabelText="Title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>
        <br />

        <MuiThemeProvider>
          <TextField
            hintText="Content"
            floatingLabelText="Content"
            multiLine={true}
            rows={2}
            name="content"
            type="text"
            value={this.state.content}
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

export default Form;