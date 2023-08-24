import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "../api/axios";

const DataContext = createContext(null);
const showToastMessage = (message) => {
  if (message == "approved") {
    console.log("inside toast");
    toast.success("NGO entry is Approved!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (message === "error") {
    toast.error("ERROR! Something wrong happened.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (message === "delete") {
    toast.success("NGO Entry is deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (message === "hello") {
    console.log("in hello");
    toast.success("Hello", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

function Dashboard() {
  const [ngoslist, setNgoslist] = useState([]);
  const [testimaglist, setTestimag] = useState([]);
  // const [img, setimg] = useState();
  useEffect(() => {
    getAllngos();
    getAllngosWhole();
    // getImage();
  }, []);

  let getAllngos = async () => {
    let url = "http://localhost:9191/image/fetch-ngos";

    await axios
      .get(url)
      .then((response) => {
        // console.log(response.data);

        setNgoslist(response.data);
      })
      .catch((err) => console.log(err));
  };

  let getAllngosWhole = async () => {
    let url = `http://localhost:9191/image/ngologoforallids`;

    await axios
      .get(url)
      .then((response) => {
        console.log(response.data[0]);
        const list = [...response.data];
        setTestimag(list);
      })
      .catch((err) => console.log(err));
  };
  console.log(testimaglist);
  // let getImage = async () => {
  //   let url = `http://localhost:8888/image/ngologoforallids`;
  //   const res = await axiosPrivate.fetch(url);
  //   console.log(res);
  // };

  async function approve(id) {
    let status = 0;
    if (window.confirm("Do you want to APPROVE this NGO?")) {
      let url = `http://localhost:9191/image/approve?id=${id}`;

      await axios
        .get(url)
        .then((response) => {
          getAllngos();
          showToastMessage("approved");
        })
        .catch(() => showToastMessage("error"));
    }
  }

  async function deletengo(id) {
    let status = 0;
    if (window.confirm("Do you want to REMOVE this NGO?")) {
      let url = `http://localhost:9191/image/delete?id=${id}`;
      await axios
        .get(url)
        .then((response) => {
          getAllngos();
          showToastMessage("delete");
        })
        .catch(() => showToastMessage("error"));
    }
  }

  const decision = [
    {
      status: "WAITING",
      color: "orange",
      onclick: approve,
      tootip: "Click to approve",
    },
    {
      status: "APPROVED",
      color: "yellow",
      onclick: deletengo,
      tootip: "Click to Remove",
    },
    {
      status: "REGISTERED",
      color: "green",
      onclick: deletengo,
      tootip: "Click to Remove",
    },
  ];

  let email = "mailto:";
  let i = 0;
  let count = 0;
  let tblcontent = ngoslist.map((item) => (
    <>
      <span style={{ display: "none" }}>
        {item.status == "WAITING"
          ? (i = 0)
          : item.status == "APPROVED"
          ? (i = 1)
          : (i = 2)}
        {(email += item.email)}
      </span>

      <tr key={item.id}>
        <td>
          <img
            style={{
              borderRadius: "50%",
              border: " 0.5px solid #fff",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              marginRight: "10px",
              maxWidth: "5vw",
              maxHeight: "auto",
            }}
            src={"data:image/jpeg;base64," + `${testimaglist[count]}`}
            alt="imag"
          />
        </td>
        <td>{item.name}</td>
        <td>{item.fow}</td>
        <td>{item.description}</td>
        <td>{item.nitiregno}</td>
        <td>{item.regDate}</td>
        <td
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={decision[i].tootip}
          onClick={() => {
            item.status == "WAITING"
              ? (i = 0)
              : item.status == "APPROVED"
              ? (i = 1)
              : (i = 2);
            decision[i].onclick(item.id);
          }}
          style={{ color: decision[i].color, cursor: "pointer" }}
        >
          {decision[i].status}
        </td>
        <td
          onClick={() => window.location.assign(email)}
          style={{ cursor: "pointer" }}
        >
          📩
        </td>
      </tr>
      <span style={{ display: "none" }}>{((email = "mailto:"), count++)}</span>
    </>
  ));

  if (tblcontent.length > 0) {
    return (
      <div>
        Admin Dashboard
        <table className="table table-striped table-hover">
          <thead>
            <tr className="">
              <th scope="col" className="table-dark">
                Logo
              </th>
              <th scope="col" className="table-dark">
                Name
              </th>
              <th scope="col" className="table-dark">
                FOW
              </th>
              <th scope="col" className="table-dark">
                Description
              </th>
              <th scope="col" className="table-dark">
                Niti Reg. no
              </th>
              <th scope="col" className="table-dark">
                Date of reg
              </th>
              <th scope="col" className="table-dark">
                Status
              </th>
              <th scope="col" className="table-dark">
                Send Email
              </th>
            </tr>
          </thead>
          <tbody>{tblcontent}</tbody>
        </table>
        {/* <div>
          Image here
          <img src={"data:image/jpeg;base64," + `${img}`} alt="imag" />
        </div> */}
        <ToastContainer />
      </div>
    );
  } else {
    return (
      <>
        <ToastContainer />
      </>
    );
  }
}

export default Dashboard;
