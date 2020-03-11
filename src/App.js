import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Header from './components/Headers';
import Hero from './components/Hero/Index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/contactUs';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        <Home/>
        <Route path="/" exact component={Home}/>
        <Route path="/contactUs" exact component = {ContactUs}/>
        <Route path="/post" exact component = {Post}/>
        <Route path="/post/:postId" exact component = {Post}/>
      </div>
    </Router>
  );
}

export default App;
