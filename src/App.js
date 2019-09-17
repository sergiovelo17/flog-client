import React, {Component} from 'react';
import './App.css';
import Nav from './Components/navbar/navbar'
import {Route, Link, Switch} from 'react-router-dom';
class App extends Component {
  render(){
  return (
    <div className="App">
     <Nav/>
     <img src='/images/My Post.jpg'></img>
    </div>
  );
}
}

export default App;
