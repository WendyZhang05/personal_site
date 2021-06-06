import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BlogItem extends Component {
    render() {
        return (
            <li className="widecard" id={this.props.id}>
                <Link className="blogtitle" to={`/blogs/${this.props.id}`} >{this.props.title}</Link>
            </li>
            )
        }
    }
    
export default BlogItem