import React, {Component} from 'react'
import marked from 'marked'

class TextFormOutput extends Component {
  //add update instance to call
  constructor(props) {
  	super(props);

    this.CreateMarkdown = this.CreateMarkdown.bind(this);
  }

  CreateMarkdown() {
    const output = {__html: marked(this.props.passingText) }
      return (
          <div className='textarea-output' dangerouslySetInnerHTML={output} />
  		);
    }

  render() {
    return (
        <this.CreateMarkdown/>
    )
  }
}

export default TextFormOutput;
