import React from "react";

const Work = (props) => {
  return (
    <div className="work">
      <div className="worksContent">
        <div className="box">
          <div className="text d-flex align-items-center gap-3">
            {props.img && (
              <div className="img">
                <img className="img-fluid" src={props.img} alt="" />
              </div>
            )}
            {props.icon && <i className={props.icon}></i>}
            <p>
              {props.job} <span>{props.position}</span>
              <br />
              <span className="time"> {props.time} </span>
            </p>
          </div>
          <div className="icon">
            <i className="ri-pencil-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
