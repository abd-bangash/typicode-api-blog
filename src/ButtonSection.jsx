import React from "react";
import Button from "./Button";

function ButtonSection({ onBtnClick, mode }) {
  return (
    <div className="btnContainer">
      <Button
        text={"Posts"}
        onBtnClick={() => onBtnClick("posts")}
        mode={mode}
      />
      <Button
        text={"Users"}
        onBtnClick={() => onBtnClick("users")}
        mode={mode}
      />
      <Button
        text={"Comments"}
        onBtnClick={() => onBtnClick("comments")}
        mode={mode}
      />
    </div>
  );
}

export default ButtonSection;
