import React, {Component} from 'react';

function EditArea() {
    return (
        <textarea className='textarea-input form-control' rows="20">
          Hello
        </textarea>
		);
  }
class TextFormEntry extends Component {
  //add update instance to call
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className='col'>
        <EditArea/>
      </div>
    )
  }
}

export default TextFormEntry;
