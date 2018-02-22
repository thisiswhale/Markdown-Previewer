import React from "react";
import ReactDOM from "react-dom";

// Including our ListContainer and Container components
import ListContainer from "./components/ListContainer";
import Container from "./components/Container";
import TextFormEntry from "./components/TextFormEntry";
//import TextFormOutput from "./components/TextFormOutput"

// Creating an App component which renders a ListContainer inside of a Container
const App = () => (
  <Container>
    <TextFormEntry/>
    {/* <TextFormOutput/> */}
    <ListContainer />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
