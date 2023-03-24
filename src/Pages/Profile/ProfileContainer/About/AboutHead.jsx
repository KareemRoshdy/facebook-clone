import React from "react";

const AboutHead = (props) => {
  return (
    <div className="head">
      <h5>{props.title}</h5>
      {props.link && <a href="#">{props.link}</a>}
    </div>
  );
};

export default AboutHead;
