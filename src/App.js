import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Posts from "./Posts";
import OlderPost from "./OlderPost";

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
