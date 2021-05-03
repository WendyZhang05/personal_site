import React, { Component } from 'react';
import profilepic from '../img/profile.JPG';


class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
          <p>My name is Lingwen Zhang. I am a software developer...</p>
      </div>
    )
  }
}
    
export default Home