import React from "react";
import "./search-box.styles.css";

export const SearchBox = (props) => (
  <div className="search">
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);
