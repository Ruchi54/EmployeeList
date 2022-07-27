import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const EmpDetails = (props) => {
  //let getId = props.match.params.id;
  //console.log(getId);
  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <div key={props.id}></div>
        <div>
          <div>
            <img
              style={{
                width: "60px",
                paddingRight: "300px",
                paddingTop: "20px",
              }}
              src={props.img}
            ></img>
          </div>
          <div style={{ textAlign: "left", marginLeft: "90px" }}>
            <div style={{ fontWeight: "bold", fontSize: 20 }}>{props.name}</div>
            <div style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>
              {props.rol}
            </div>
            <div style={{ fontWeight: "bold", fontSize: 15 }}>
              Employee ID:{props.emppid}
            </div>
            <div style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>
              Date of Joining:{props.date}
            </div>
            <div style={{ color: "gray" }}>
              -----------------------------------
            </div>

            <div style={{ paddingRight: "30px" }}>
              Phone:
              <span
                style={{
                  paddingLeft: "30px",
                  fontSize: 10,
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {props.phone}
              </span>
            </div>

            <div style={{ paddingRight: "2px" }}>
              Email:
              <span
                style={{
                  paddingLeft: "30px",
                  fontSize: 10,
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {props.email}
              </span>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default EmpDetails;
