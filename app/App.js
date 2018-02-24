import React from "react";
import ReactDOM from "react-dom";

// Including our ListContainer and Container components

import Container from "./components/Container";
import TextFormEntry from "./components/TextFormEntry";


// Creating an App component which renders a ListContainer inside of a Container
const App = () => (
  <Container>
    <TextFormEntry/>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
