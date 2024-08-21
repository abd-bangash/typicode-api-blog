import React from "react";

function Button({ text, onBtnClick, mode }) {
  return (
    <button
      className={text.toLowerCase() === mode ? "selected btn" : "btn"}
      onClick={onBtnClick}
    >
      {text}
    </button>
  );
}

export default Button;
