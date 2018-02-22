import React,{ Component } from 'react';

class TextFormEntry extends Component {
  constructor(props) {
    super(props);
  }
  //add update instance to call

   TextareaInput() {
	return (
    <textarea className='textarea-input' rows="10" cols="50">
      At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
    </textarea>
	);
};

  render() {

      <TextareaInput />

  }
}

export default TextFormEntry;
