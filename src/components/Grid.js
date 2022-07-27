import React from "react";
import Data from "../data.json";
import "../style.css";
import Employee from "./Employee";

const Grid = () => {
  return (
    <>
      <div className="row">
        <div>
          <div>
            {Data.map((el, index) => {
              return (
                <>
                  <Employee
                    key={index}
                    img={el.path}
                    name={el.name}
                    role={el.Role}
                    empid={el.empid}
                    date={el.joindate}
                    phone={el.mobile}
                    email={el.email}
                    link={`/employees/${el.id}`}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
