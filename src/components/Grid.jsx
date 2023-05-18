/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-15 00:06:47
 * @modify date 2023-03-15 00:06:47
 * @desc [description]
 */

import React from "react";

function Grid(props) {
  return <div className={"length-" + props.length}>{props.children}</div>;
}

export default Grid;
