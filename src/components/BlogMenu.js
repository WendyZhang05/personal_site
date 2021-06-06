import React, { Component } from 'react';
import BlogItem from '../components/BlogItem';

class BlogMenu extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Blogs</h1>
                <ul>
                    <BlogItem title="Blog 1" id="1" />
                    <BlogItem title="Blog 2" id="2" />
                </ul>
            </div>
            )
        }
    }
    
export default BlogMenu