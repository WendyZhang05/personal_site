import React, { Component } from 'react';
import Wildcard from '../components/Wildcard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Wildcard title="M.S. in Telecommunication and Network Management" where="Syracuse University" from="2010" to="2012"/>
            <Wildcard title="B.S. in Information Security" where="Hunan University" from="2006" to="2010"/>
            </div>
            )
        }
    }
    
export default Education