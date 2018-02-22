import React from "react";

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const Container = props => (
  <div style={styles.containerStyle} className="container">
    {props.children}
  </div>
);

const styles = {
  containerStyle: {
    marginTop: 50,
    textAlign: "center"
  }
};

export default Container;
