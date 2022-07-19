import React from "react";
import Data from "../data.json";
import "../style.css";

const Grid = () => {
  return (
    <>
      <div className="row">
        <div>
          <div>
            {Data.map((el) => {
              return (
                <div className="column" style={{ backgroundColor: "white" }}>
                  <div key={el.id}></div>
                  <div>
                    <div>
                      <img style={{ width: "60px" }} src={el.path}></img>
                    </div>
                    <div style={{ fontWeight: "bold" }}>{el.name}</div>
                    <div>{el.Role}</div>
                  </div>
                  <br></br>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
