import React, {Component} from 'react';
import TextFormOutput from "./TextFormOutput"

class TextFormEntry extends Component {
  //add update instance to call
  constructor() {
  	super();
    this.state = {
      inputValue: `## Your App Title\n#### Choose Any Size \n###### You Like\n\nMake things **Bold** or *italic*, or _**both**_.\n\n##### This code built with:\n- React\n- JavaScript \n- Sass\n\n##### How to code:\n1. Learn code\n2. Write code\n3. ...\n   1. Follow ...\n   2. Then ...\n4. $$$\n\n![Sith Parrot](http://cultofthepartyparrot.com/parrots/hd/sithparrot.gif)\n![Jedi Parrot](http://cultofthepartyparrot.com/parrots/hd/jediparrot.gif)
    `};
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
            rows="25"
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
