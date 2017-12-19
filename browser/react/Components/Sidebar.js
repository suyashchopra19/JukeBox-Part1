import React from "react";
import ReactDOM from "react-dom";

export default function Sidebar(props) {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#" onClick={props.deselectAlbum}>
            ALBUMS
          </a>
        </h4>
      </section>
    </sidebar>
  );
}
