/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-14 20:42:36
 * @modify date 2023-03-14 20:42:36
 * @desc [description]
 */

import React from "react";
import "./RouterHolder.css";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import ErrorPage from "../error/ErrorPage";

function RouterHolder() {
  return (
    <div className="router-holder">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default RouterHolder;
