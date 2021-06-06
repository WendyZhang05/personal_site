import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Blogs from './contents/Blogs';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </div>
    </Router>
    );
  }
  
export default App;