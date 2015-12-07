import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
// import {createHistory, useBasename} from 'history';
import Home from './pages/Home';
import CSS from './pages/CSS';
import Grid from './pages/Grid';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';

const NavSections = [
  {value: '/css', label: 'CSS'},
  {value: '/grid', label: 'Grid'},
  {value: '/buttons', label: 'Buttons'},
  {value: '/forms', label: 'Forms'}
];

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let menuItems = NavSections.map(function (item){
      return(
        <li key={item.value}>
          <Link to={item.value} activeClassName="active">{item.label}</Link>
        </li>
      )
    });

    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to={"/home"} className="navbar-brand">ReactBS UI Lib</Link>
          </div>
          <ul className="nav navbar-nav">
            {menuItems}
          </ul>
        </div>
      </nav>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <NavBar />
        <div className="main clearfix">
          {this.props.children}
        </div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <p className="navbar-text">Created by Ariel as React-ified Bootstrap</p>
          </div>
        </div>
      </div>
    )
  }
}

// const history = createHistory();

render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="css" component={CSS} />
      <Route path="grid" component={Grid} />
      <Route path="buttons" component={Buttons} />
      <Route path="forms" component={Forms} />
    </Route>
  </Router>, document.getElementById('app')
);
