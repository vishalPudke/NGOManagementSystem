import React, { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { axiosPrivate } from "../api/axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function NgoCards() {
  const axiosPrivate = useAxiosPrivate();
  const [ngoslist, setNgoslist] = useState([]);
  const [testimaglist, setTestimag] = useState([]);
  const [ngodataformodal, setngodataformodal] = useState("");

  useEffect(() => {
    //   getAllngos();
    getAllngos();
    // getImage();
  }, []);

  let navigate = useNavigate();
  function ngohomepage(data) {
    setngodataformodal(data);
    localStorage.setItem("ngohome", JSON.stringify(data));
    navigate("/ngohomepage", { state: data });
  }

  let getAllngos = async () => {
    let url = "http://localhost:9191/image/ngowholelist";
    // let url = "http://localhost:8888/api/change/ngowholelist";

    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        setNgoslist(response.data);
      })
      .catch((err) => console.log(err));
  };

  let tblcontent = ngoslist
    .filter((item) => item.status === "REGISTERED")
    .map((item) => (
      <>
        <Card className="mycard">
          <Card.Img
            variant="top"
            src={"data:image/jpeg;base64," + `${item.logo}`}
            className="img-zoom"
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.tagline}</Card.Text>
            {/* <Button className="btn btn-warning" onClick={() => ngohomepage(item)}> */}
            <Button variant="warning" onClick={() => ngohomepage(item)}>
              Know More
            </Button>
            {/*  */}
          </Card.Body>
        </Card>
      </>
    ));

  if (tblcontent.length > 0) {
    return (
      <div>
        <div className="row container-fluid justify-content-center">
          {tblcontent}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default NgoCards;
