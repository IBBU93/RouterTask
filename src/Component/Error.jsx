

import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return(
    <div id="container4">
       <div className="row">
        <div className="col-mg-3">
        <h6>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-mg-3">
        <h6>What Is Hacking? Types of Hacking & More</h6>
        </div>
      </div>
      <div className="row">
      <div className="col-mg-3">
        <h6>Cybersecurity Vs Ethical Hacking: Top 10 Differences</h6>
        </div>
      </div>
    
    <div>
      <button className="btn btn-primary" onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  
  </div>
  )
}
export default Error;