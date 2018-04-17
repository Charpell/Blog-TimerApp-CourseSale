import React, { Component } from "react";
import Navbar from "./Blog/Navbar";
import Header from "./Blog/Header";
import Footer from "./Blog/Footer";
import Posts from "./Blog/Posts";
import OlderPost from "./Blog/OlderPost";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Posts />
              <hr />
              <OlderPost />
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
