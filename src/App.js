import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link,
  // useNavigate,
  // Outlet,
} from "react-router-dom";

export default class App extends Component {
  name = "this is"
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">

          <Routes>
            <Route exact path='/' element={<News />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </Router>

    )
  }
}
