import React from "react";
import Data from "../data.json";
import { Table } from "semantic-ui-react";
import "../style.css";

const List = () => {
  return (
    <div className="main_row">
      {/*<div className="list" style={{ backgroundColor: "#aaa" }}>

      <div className='row_small'>
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>

      <div className='row_small'>
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>

      <div className='row_small'>
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>

</div>*/}

      <div className="row">
        <div className="column_List">
          <Table singleLine className="table table-striped">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Employee ID</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Mobile</Table.HeaderCell>
                <Table.HeaderCell>Join Date</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Data.map((el) => {
                return (
                  <Table.Row key={el.id} style={{ justifyContent: "center" }}>
                    <Table.Cell style={{ width: "35px" }}>
                      <img style={{ width: "35px" }} src={el.path} />
                    </Table.Cell>
                    <Table.Cell style={{ color: "orange", textAlign: "left" }}>
                      {el.name}
                    </Table.Cell>
                    <Table.Cell>{el.empid}</Table.Cell>
                    <Table.Cell>{el.email}</Table.Cell>
                    <Table.Cell>{el.mobile}</Table.Cell>
                    <Table.Cell>{el.joindate}</Table.Cell>
                    <Table.Cell>{el.Role}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default List;
