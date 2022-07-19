import React from "react";
import Data from "../data.json";
import "../style.css";

const Grid = () => {
  return (
    <>
      {/*<div className="row">
      <div className="card" style={{width:"400px"}}>
          <img className="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style={{width:"100%"}} />
          <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" className="btn btn-primary">See Profile</a>
          </div>
      </div>

      <div className="column" style={{ width: "18rem" }}>
          <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
</div>*/}

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
