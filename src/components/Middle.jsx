import React from "react";

function Middle(props) {
  return (
    <div className="middle">
      <div className="container-fluid">
        <div className="row">
          <marquee
            behavior="slide"
            direction="up"
            className="col-sm-6 col-md col-lg headline"
          >
            {props.headline}
          </marquee>

          <marquee
            behavior="slide"
            direction="up"
            className="col-sm-6 col-md col-lg subhead"
          >
            {props.subhead}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Middle;
