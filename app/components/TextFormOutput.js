import React, {Component} from 'react'
import marked from 'marked'

console.log(marked('I am using __markdown__.')); // translate into html tags
console.log(marked('# Marked in browser\n\nRendered by **marked**.'));

class TextFormOutput extends Component {
  //add update instance to call
  constructor(props) {
  	super(props);
    console.log('hell', props)
    // this.state = {
    //   markupValue: marked(props)
    // };
    this.Markdown = this.Markdown.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

      console.log("TextOutHere", marked(this.props.passingText));
      // console.log("Previous state:", prevState);
      // console.log("Current state:", this.state);
  }

  Markdown() {
      return (
          <div className='textarea-output'>
            {/* {marked(this.props.passingText)}  this passes a string*/}
          </div>
  		);
    }

  render() {
    return (
        <this.Markdown/>
    )
  }
}

export default TextFormOutput;
