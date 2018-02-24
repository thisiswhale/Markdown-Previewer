import React, {Component} from 'react';
import TextFormOutput from "./TextFormOutput"

class TextFormEntry extends Component {
  //add update instance to call
  constructor() {
  	super();
    this.state = {
      inputValue: "# Marked in browser\n\nRendered by **marked**."
    };
    // Binding handleInputChange since we'll be passing
    //them as callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.InputArea = this.InputArea.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
      console.log("Updated");
      console.log("Previous state:", prevState);
      console.log("Current state:", this.state);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  InputArea() {
      return (
          <textarea
            className='textarea-input form-control'
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            rows="20"
          />
  		);
    }

  render() {
    return (
      <div className="row">
        <div className='col'>
          <this.InputArea/>
        </div>
        <div className='col'>
        <TextFormOutput passingText={this.state.inputValue} />
        </div>
      </div>
    )
  }
}

export default TextFormEntry;
