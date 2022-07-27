import React, { useEffect, useState } from "react";
import Form from "./Form";
import Grid from "./Grid";
import List from "./List";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
//import Employee from "./Employee";

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

  //Company
  const [company, setCompany] = useState("");
  const [companyErr, setCompanyErr] = useState(false);

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

  //Company Validation

  const companyValidation = (event) => {
    let company = event.target.value;

    if (company.length === 0) {
      setCompanyErr(true);
    } else {
      setCompanyErr(false);
    }
    setCompany(company);
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

  const [datas, setDatas] = useState([]);

  //Edit user data from form
  const [editData, setEditData] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    //alert("hello");

    const newData = {
      id: new Date().getTime(),
      name: txt,
      lastname: txtt,
      empid: emplid,
      email: email,
      phone: num,
      joiningdate: date,
      designation: deg,
    };

    setDatas([...datas].concat(newData));
    setTxt("");
    setTxtt("");
    setAlpha("");
    setEmplid("");
    setNum("");
    setEmail("");
    setDate("");
    setDepartment("");
    setCompany("");
    setDeg("");
  };

  const deleteTodo = (id) => {
    const updateData = [...datas].filter((data) => data.id !== id);

    setDatas(updateData);
  };

  //Edit Form

  /*const editTodo = (id) => {
  const updateddata = [...datas].map((data) => {
  if (data.id === id) {
  data.name = editingData;
  data.lastname = editingLastname;
  data.empid = editingEmpId;
  data.email = editingEmail;
  data.phone = editingPhone;
  data.joiningdate = editingDate;
  data.designation = editingDeg;
  }
  return data;
  });
 
  //console.log(updateddata);
  setDatas(updateddata);
 
  setDataEditing(null);
  setEditingData("");
  setEditingLastName("");
  };*/

  const editTodo = () => {
    const updateddata = [...datas].map((data) => {
      if (data.id === editData.id) {
        data = editData;
      }
      return data;
    });
    console.log("edittttt", updateddata);
    setDatas(updateddata);
    setEditData("");
  };

  //Save and retrive data in localstorage
  useEffect(() => {
    const json = JSON.stringify(datas);
    localStorage.setItem("data", json);
  }, [datas]);

  useEffect(() => {
    const json = localStorage.getItem("data");
    const loaddata = JSON.parse(json);
    if (loaddata) {
      setDatas(loaddata);
    }
  }, []);

  //Grid List state toggle
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

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontWeight: "bold" }}>
            Employee
          </a>
          <div class="d-flex">
            <BrowserRouter>
              <Link to="/employees?type=grid">
                <button className="display" onClick={() => Setactive("Grid")}>
                  <FontAwesomeIcon icon="fa-solid fa-grip" />
                </button>
              </Link>

              <Link to="/employees?type=list">
                <button className="display" onClick={() => Setactive("List")}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
                </button>
              </Link>
            </BrowserRouter>

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
          //onSubmit={handleSubmit}
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
                    name="firstname"
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
                    name="lastname"
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
                    name="username"
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
                    name="email"
                    className="form-control"
                    id="inputEmail4"
                    onChange={emailValidation}
                    value={email}
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
                    name="empid"
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
                    name="date"
                    className="form-control"
                    id="date"
                    onChange={dateValidation}
                    value={date}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPhone4" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
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
                  <select
                    id="inputCompany"
                    className="form-select"
                    value={company}
                    onChange={companyValidation}
                  >
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
                    value={department}
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
                    value={deg}
                  >
                    <option selected></option>
                    <option>Web Designer</option>
                    <option>Web Developer</option>
                    <option>Android Developer</option>
                  </select>
                </div>

                <div className="col-12">
                  <button
                    onSubmit={submitForm}
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

      {active === "List" && (
        <List
          emp={
            <Table singleLine className="table table-striped">
              <Table.Body>
                {datas.map((el) => {
                  return (
                    <div key={el.id}>
                      {editData.id === el.id ? (
                        <div>
                          <h2>Edit Employee</h2>
                          <form className="row g-3" onSubmit={submitForm}>
                            <div className="col-md-6">
                              <label for="inputEmail4" className="form-label">
                                FirstName
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                key="firstname"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["name"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.name}
                              />
                            </div>
                            <div className="col-md-6">
                              <label
                                for="inputPassword4"
                                className="form-label"
                              >
                                LastName
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputPassword4"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["lastname"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.lastname}
                              />
                            </div>

                            <div className="col-md-6">
                              <label for="inputEmail4" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["email"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.email}
                              />
                            </div>
                            <div className="col-md-6">
                              <label for="inputEmail4" className="form-label">
                                EmployeeID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["empid"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.empid}
                              />
                            </div>
                            <div className="col-md-6">
                              <label for="inputEmail4" className="form-label">
                                JoiningDate
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["joiningdate"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.joiningdate}
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
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["phone"]: e.target.value,
                                  });
                                }}
                                value={editData.phone}
                              />
                            </div>

                            <div className="col-md-6">
                              <label
                                for="inputDesignation"
                                className="form-label"
                              >
                                Designation
                              </label>
                              <select
                                id="inputDesignation"
                                className="form-select"
                                onChange={(e) => {
                                  setEditData({
                                    ...editData,
                                    ["designation"]: e.target.value,
                                  });
                                }}
                                defaultValue={editData.designation}
                              >
                                <option selected></option>
                                <option>Web Designer</option>
                                <option>Web Developer</option>
                                <option>Android Developer</option>
                              </select>
                            </div>

                            <div className="col-12">
                              <button
                                onClick={() => editTodo()}
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
                        </div>
                      ) : (
                        <div>
                          <div className="main_row">
                            <div className="row">
                              <div className="column_List">
                                <Table
                                  singleLine
                                  className="table table-striped"
                                >
                                  <Table.Row
                                    singleLine
                                    key={el.id}
                                    style={{ justifyContent: "left" }}
                                  >
                                    <Table.Cell
                                      style={{
                                        color: "orange",
                                        textAlign: "left",
                                        paddingLeft: "30px",
                                      }}
                                    >
                                      {el.name}
                                      <span
                                        style={{ paddingLeft: "2px" }}
                                      ></span>
                                      {el.lastname}
                                    </Table.Cell>
                                    <Table.Cell
                                      style={{ paddingLeft: "240px" }}
                                    >
                                      {el.empid}
                                    </Table.Cell>
                                    <Table.Cell
                                      style={{ paddingLeft: "200px" }}
                                    >
                                      {el.email}
                                    </Table.Cell>
                                    <Table.Cell
                                      style={{ paddingLeft: "100px" }}
                                    >
                                      {el.phone}
                                    </Table.Cell>
                                    <Table.Cell
                                      style={{ paddingLeft: "200px" }}
                                    >
                                      {el.joiningdate}
                                    </Table.Cell>
                                    <Table.Cell
                                      style={{ paddingLeft: "200px" }}
                                    >
                                      {el.designation}
                                    </Table.Cell>

                                    <Table.Cell>
                                      <div
                                        className="dropdown"
                                        style={{ paddingLeft: "100px" }}
                                      >
                                        <button
                                          className="btn btn-secondary dropdown-toggle"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                                        </button>
                                        <ul
                                          className="dropdown-menu"
                                          style={{
                                            backgroundColor: "lightgray",
                                          }}
                                        >
                                          <li>
                                            <a className="dropdown-item">
                                              <button
                                                style={{
                                                  border: "none",
                                                  backgroundColor: "lightgray",
                                                }}
                                                onClick={() => setEditData(el)}
                                              >
                                                <FontAwesomeIcon icon="fa-solid fa-pencil" />
                                                Edit
                                              </button>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <button
                                                style={{
                                                  border: "none",
                                                  backgroundColor: "lightgray",
                                                }}
                                                onClick={() =>
                                                  deleteTodo(el.id)
                                                }
                                              >
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                                Delete
                                              </button>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </Table.Cell>
                                  </Table.Row>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Table.Body>
            </Table>
          }
        />
      )}
      {active === "Grid" && <Grid />}
    </div>
  );
};

export default HomePage;
