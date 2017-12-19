import React from "react";
import ReactDOM from "react-dom";

export default function Footer() {
  return (
    <div id="main" className="container-fluid">
      <footer>
        <div className="pull-left">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-backward" />
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-play" />
          </button>
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-step-forward" />
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" />
          </div>
        </div>
      </footer>
    </div>
  );
}
