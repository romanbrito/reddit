import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class Form extends Component {

  handleChange = () => {
    return (event) => {
      let state = {};
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    return(
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="string"
            //checked={this.state.isGoing}
            onChange={this.handleChange}/>
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            //value={this.state.numberOfGuests}
            onChange={this.handleChange}/>
        </label>
        <MuiThemeProvider>
          <RaisedButton
            label={'Test Button'}
            primary={true}
            onTouchTap={()=>{console.log('hello, I work')}}
          />
        </MuiThemeProvider>
      </form>
    );
  }
}

export default Form;