import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DrawerMain from "./components/DrawerMain";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import ArticleCard from './components/ArticleCard';
import Fab from './components/Fab';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <DrawerMain/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <Fab/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;