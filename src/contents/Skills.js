import React, { Component } from 'react'

class Skills extends Component {
    render() {
        const skillList = ['HTML','CSS','JS','REACT JS','Django','Python']
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {skillList.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills