import React from "react";

function Alert(props) {
  return (
    <div
      className={`alert ${
        props.type === "success" ? "alert-success" : "alert-danger"
      } alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.message}</strong>
    </div>
  );
}

export default Alert;