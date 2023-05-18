/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-14 20:43:02
 * @modify date 2023-03-14 20:43:02
 * @desc [description]
 */

import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navbar">
      <a href="/">
        <img src="navbar-home.jpg" alt="home-navbar"></img>
      </a>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">BLOG</a>
        </li>
        <li>
          <a href="/">SERVICES</a>
        </li>
        <li>
          <a href="/">PROJECTS</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
