import React from "react";
import "../style.css";

const Form = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}></button>
        {props.content}
      </div>
    </div>
  );
};

export default Form;
