import React from "react";

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const Title = () => (
  <h2 className='title'>Markdown Previewer</h2>
);

const Container = props => (

  <div className="container">
      <Title />
        {props.children}
  </div>
);


export default Container;
