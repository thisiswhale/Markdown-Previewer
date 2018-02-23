import React, {Component} from 'react';

function Markdown() {
    return (

        <textarea className='textarea-input' rows="10">
          Hello here
        </textarea>

		);
  }
class TextFormOutput extends Component {
  //add update instance to call
  constructor(props) {
  	super(props);
  }


  render() {
    return (
      <div className='col'>
        <Markdown/>
      </div>
    )
  }
}

export default TextFormOutput;
