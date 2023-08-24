import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NgoRegDiv() {
  let navigate = useNavigate();
  const ngoform = () => {
    navigate("/ngoreg", { replace: true });
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ngoform}>
        Register NGO
      </button>
    </div>
  );
}

export default NgoRegDiv;
