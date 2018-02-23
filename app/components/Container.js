import React from "react";

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const Title = () => (
  <h1>Markdown Previewer</h1>
);

const Container = props => (

  <div className="container-fluid">
      <Title />
    <div className="row">
        {props.children}
    </div>
  </div>
);


export default Container;
