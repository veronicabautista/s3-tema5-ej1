import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
    <div className="App">
      <div><Header /></div>
      <div><Content /></div>
      <div><Footer /></div>
    </div>
    );
  }
}

export default App;
