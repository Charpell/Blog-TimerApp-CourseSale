import React, { Component } from "react";

import Coursesales from './CourseSales'
import './App.css';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS10 dev course', price: 199},
      { name: 'Complete presenting course', price: 299},
      { name: 'Complete front end dev course', price: 180},
      { name: 'Big Boujnty and web app presenting', price: 190},
    ]
    return (
      <div className="container">
        <h2>Welcome to Course Purchase Page</h2>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
