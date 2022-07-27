import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import EmpDetails from "./EmpDetails";

const Employee = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="column" style={{ backgroundColor: "white" }}>
          <div key={props.key}></div>

          <div>
            <div>
              <img style={{ width: "60px" }} src={props.img} alt="empimg"></img>
            </div>

            <Link to={props.link}>
              <div style={{ fontWeight: "bold" }}>{props.name}</div>
            </Link>

            <div>{props.role}</div>
          </div>
          <br></br>

          {
            <Routes>
              <Route
                exact
                path="/employees/:id"
                element={
                  <EmpDetails
                    name={props.name}
                    img={props.img}
                    rol={props.role}
                    emppid={props.empid}
                    date={props.date}
                    phone={props.phone}
                    email={props.email}
                  />
                }
              />
            </Routes>
          }
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Employee;
