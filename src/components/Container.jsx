/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-15 00:05:45
 * @modify date 2023-03-15 00:05:45
 * @desc [description]
 */

import React from 'react'
import './Container.css'

function Container(props) {
  return (
    <div className="container">
        {props.children}
    </div>
  )
}

export default Container