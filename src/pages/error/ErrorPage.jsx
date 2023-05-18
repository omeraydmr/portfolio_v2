/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-14 21:21:46
 * @modify date 2023-03-14 21:21:46
 * @desc [description]
 */

import React from "react";
import "./ErrorPage.css";

function ErrorPage() {
  const sendToHome = () => {
    document.location.href = "/";
  };
  return (
    <div className="error-page">
      <h1>Wait What</h1>
      <p>Did You Try?</p>
      <span>Don't Even Try Again</span>
      <button onClick={sendToHome}>Go Home</button>
    </div>
  );
}

export default ErrorPage;
