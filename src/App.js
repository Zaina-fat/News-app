import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={<News country="in" key="general" category="general" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News country="in" key="science" category="science" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News country="in" key="business" category="business" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News country="in" key="technology" category="technology" />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  country="in"
                  key="entertainment"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={<News country="in" key="general" category="general" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News country="in" key="health" category="health" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News country="in" key="sports" category="sports" />}
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
