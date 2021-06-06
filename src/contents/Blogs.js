import React, { Component } from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import BlogMenu from '../components/BlogMenu';
import Blog1 from './BlogPages/Blog1';
import Blog2 from './BlogPages/Blog2';


class Blogs extends Component {
    render() {
        return (
            <Switch>
                <Route path="/blogs" exact component={BlogMenu} />
                <Route path="/blogs/1" component={Blog1} />
                <Route path="/blogs/2" component={Blog2} />
            </Switch>
        )
    }
}
    
export default Blogs