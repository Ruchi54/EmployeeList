import React, { useState } from "react";

import { Table } from "semantic-ui-react";

import "../style.css";

const List = (props) => {
  return (
    <div className="main_row">
      <div className="row">
        <div className="column_List">
          <Table singleLine className="table table-striped">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>

                <Table.HeaderCell>Employee ID</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Mobile</Table.HeaderCell>
                <Table.HeaderCell>Join Date</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          <Table singleLine className="table table-striped align-middle">
            <Table.Body>
              <Table.Row>
                <Table.Cell>{props.emp}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default List;
