import React from "react";

function Todo({ onClick, completed, text }) {
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>;
}
