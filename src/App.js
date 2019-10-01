import React, {Component} from 'react';
import './App.css';
import Nav from './Components/navbar/navbar'
import TestPage from './Components/testpage/testpage'
import {Route, Link, Switch} from 'react-router-dom';
class App extends Component {
  render(){
  return (
    <div className="App">
     <Nav/>
     <img src='/images/My Post.jpg'></img>
     <Switch>
     <Route exact path="/this" render ={(props)=> <TestPage
           {...props} 
           />} />
    </Switch>
    </div>
  );
}
}

export default App;
