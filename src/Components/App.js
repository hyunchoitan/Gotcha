import React from "react";
import Router from "./Router"
import { Component } from "react";
import GlobalStyle from "./GlobalStyle";


class App extends Component {
  render() {
    return(
      <>
      <Router />
      <GlobalStyle />
      </>
    );
  }
}

export default App;