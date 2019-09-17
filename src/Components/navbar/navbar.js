import React, { Component } from "react";
import "./navbar.css";
import { Route, Link, Switch } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              flog
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Feed</a>
              </li>
              <li>
                <a href="badges.html">Workouts</a>
              </li>
              <li>
                <a href="badges.html">Recipes</a>
              </li>
              <li>
                <a href="collapsible.html">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
