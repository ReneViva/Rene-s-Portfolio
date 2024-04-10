import React from "react";
import { Link } from "react-router-dom";
import "./LinkTo.css";
import cursor from '../../../files/hire.png'
export default function LinkTo({ theUrl, title, img })
 {

    
  return (
    <div>
      <Link className="lis-hover" style={{ cursor: `url(${cursor}), auto` }} to={theUrl} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="" />
        <div >{title}</div>
      </Link>
    </div>
  );
}
