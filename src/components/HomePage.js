import React, { useState } from "react";
import Form from "./Form";
import Grid from "./Grid";
import List from "./List";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
  const [open, Setisopen] = useState(false);

  //Form Validation
  //Employee first name
  const [employee, setEmployee] = useState("");
  const [employeeErr, setEmployeeErr] = useState(false);

  //Employee last name
  const [emplast, setEmplast] = useState("");
  const [emplastErr, setEmplastErr] = useState(false);

  //User name
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);

  //Email
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  //Employee Id
  const [empid, setEmpid] = useState("");
  const [empidErr, setEmpidErr] = useState(false);

  //Date
  const [date, setDate] = useState("");
  const [dateErr, setDateErr] = useState(false);

  //Department
  const [department, setDepartment] = useState("");
  const [departmentErr, setDepartmentErr] = useState(false);

  //Designation
  const [deg, setDeg] = useState("");
  const [degErr, setDegErr] = useState(false);

  //Text state
  const [txt, setTxt] = useState("");

  const [txtt, setTxtt] = useState("");

  //User state
  const [alpha, setAlpha] = useState("");

  //Emp id state
  const [emplid, setEmplid] = useState("");

  //Phone num state
  const [num, setNum] = useState("");

  //Employee Validation
  const empValidation = (event) => {
    let name = event.target.value;
    console.log(name);

    const re = /^[A-Za-z]+$/;
    if (name === "" || re.test(name)) {
      setTxt(name);
    }

    if (name.length < 3) {
      setEmployeeErr(true);
    } else {
      setEmployeeErr(false);
    }
    setEmployee(name);
  };

  //Last name validation
  const emplastValidation = (event) => {
    let name = event.target.value;
    console.log(name);

    const re = /^[A-Za-z]+$/;
    if (name === "" || re.test(name)) {
      setTxtt(name);
    }

    if (name.length < 3) {
      setEmplastErr(true);
    } else {
      setEmplastErr(false);
    }
    setEmplast(name);
  };

  //User Validaton
  const userValidation = (event) => {
    let username = event.target.value;
    console.log(username);

    const regex = /^[0-9a-zA-Z]+$/;
    if (username.match(regex) || username === "") {
      setAlpha(username);
    }

    if (username.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(username);
  };

  //Email Validation
  const emailValidation = (event) => {
    let email = event.target.value;

    if (email.length < 3) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(email);
  };

  //EmpId Validation
  const empidValidation = (event) => {
    let empid = event.target.value;
    console.log(empid);

    const id = /^[0-9a-zA-Z-]+$/;
    if (empid === "" || id.test(empid)) {
      setEmplid(empid);
    }

    if (empid.length < 3) {
      setEmpidErr(true);
    } else {
      setEmpidErr(false);
    }
    setEmpid(empid);
  };

  //Date Validation
  const dateValidation = (event) => {
    let date = event.target.value;

    if (date.length === 0) {
      setDateErr(true);
    } else {
      setDateErr(false);
    }
    setDate(date);
  };

  //Department Validation
  const departmentValidation = (event) => {
    let department = event.target.value;

    if (department.length === 0) {
      setDepartmentErr(true);
    } else {
      setDepartmentErr(false);
    }
    setDepartment(department);
  };

  //Designation Validation
  const degValidation = (event) => {
    let deg = event.target.value;

    if (deg.length === 0) {
      setDegErr(true);
    } else {
      setDegErr(false);
    }
    setDeg(deg);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (employee.length === 0) {
    } else {
    }
  };

  //Grid List state
  const [active, Setactive] = useState("List");

  const togglePopup = () => {
    Setisopen(!open);
    setTxt("");
    setTxtt("");
    setAlpha("");
    setEmplid("");
    setNum("");
  };

  //Phone number
  const onPhone = (event) => {
    let number = event.target.value;
    console.log(number);

    const num = /^[0-9]+$/;
    if (number === "" || num.test(number)) {
      setNum(number);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello");
  };

  return (
    <div>
      {/*<nav>
        <div>
          Employee
          <button className="btn" onClick={() => Setactive("List")}>
            <i className="fa fa-bars"></i> List
          </button>
          <button className="btn active" onClick={() => Setactive("Grid")}>
            Grid
          </button>
          <button onClick={togglePopup}>Add Employee</button>
        </div>
  </nav>*/}

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontWeight: "bold" }}>
            Employee
          </a>
          <div class="d-flex">
            <button className="display" onClick={() => Setactive("Grid")}>
              <FontAwesomeIcon icon="fa-solid fa-grip" />
            </button>

            <button className="display" onClick={() => Setactive("List")}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <button
              type="submit"
              className="btn btn-warning rounded-pill"
              onClick={togglePopup}
              style={{
                backgroundColor: "orange",
                height: "45px",
                color: "white",
              }}
            >
              Add Employee
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <Form
          handleClose={togglePopup}
          onSubmit={handleSubmit}
          content={
            <>
              <h2>Add Employee</h2>
              <form className="row g-3" onSubmit={submitForm}>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    FirstName
                    <span style={{ color: "red" }}>
                      {employee.length === 0 || employeeErr ? (
                        <span>*</span>
                      ) : (
                        ""
                      )}
                    </span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    onChange={empValidation}
                    value={txt}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    LastName
                    <span style={{ color: "red" }}>
                      {emplast.length === 0 || emplastErr ? <span></span> : ""}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    onChange={emplastValidation}
                    value={txtt}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    UserName
                    <span style={{ color: "red" }}>
                      {user.length === 0 || userErr ? <span>*</span> : ""}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    onChange={userValidation}
                    value={alpha}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                    <span style={{ color: "red" }}>
                      {email.length === 0 || emailErr ? <span>*</span> : ""}
                    </span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    onChange={emailValidation}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    EmployeeID
                    <span style={{ color: "red" }}>
                      {empid.length === 0 || empidErr ? <span>*</span> : ""}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    onChange={empidValidation}
                    value={emplid}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    JoiningDate
                    <span style={{ color: "red" }}>
                      {date.length === 0 || dateErr ? <span>*</span> : ""}
                    </span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    onChange={dateValidation}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPhone4" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhone4"
                    onChange={onPhone}
                    value={num}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCompany" className="form-label">
                    Company
                  </label>
                  <select id="inputCompany" className="form-select">
                    <option selected></option>
                    <option>Global Technologies</option>
                    <option>Delta Infotech</option>
                    <option>International Software Inc</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="inputDepartment" className="form-label">
                    Department
                    <span style={{ color: "red" }}>
                      {department.length === 0 || departmentErr ? (
                        <span>*</span>
                      ) : (
                        ""
                      )}
                    </span>
                  </label>
                  <select
                    id="inputDepartment"
                    className="form-select"
                    onChange={departmentValidation}
                  >
                    <option selected></option>
                    <option>Web Development</option>
                    <option>IT Management</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="inputDesignation" className="form-label">
                    Designation
                    <span style={{ color: "red" }}>
                      {deg.length === 0 || degErr ? <span>*</span> : ""}
                    </span>
                  </label>
                  <select
                    id="inputDesignation"
                    className="form-select"
                    onChange={degValidation}
                  >
                    <option selected></option>
                    <option>Web Designer</option>
                    <option>Web Developer</option>
                    <option>Android Developer</option>
                  </select>
                </div>

                <div className="col-12">
                  <button
                    //onSubmit={submitForm}
                    style={{
                      backgroundColor: "orange",
                      height: "45px",
                      width: "150px",
                      color: "white",
                    }}
                    type="submit"
                    className="btn btn-warning rounded-pill"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          }
        />
      )}
      {active === "List" && <List />}
      {active === "Grid" && <Grid />}
    </div>
  );
};

export default HomePage;
