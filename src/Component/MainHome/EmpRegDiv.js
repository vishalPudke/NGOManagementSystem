import React from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpRegDiv() {
  let navigate = useNavigate();
  const ngoform = () => {
    navigate("/empreg", { replace: true });
  };

  return (
    <div>
      EmpRegDiv
      <button className="btn btn-success" onClick={ngoform}>
        Register as Employee
      </button>
    </div>
  );
}

export default EmpRegDiv;
