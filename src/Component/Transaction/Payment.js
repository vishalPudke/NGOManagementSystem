import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import logo from "../Navigation/logo.jpg";
import swal from "sweetalert";
//import useAxios from "../../hooks/UseAxios";

function Payment() {
  const [amount, setAmount] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log("Payment Started...");
    console.log("Amount transfer:", amount);

    if (amount === "" || amount === null) {
      swal("Failed", "Amount is required !!", "error");
      return;
    }

    try {
      const response = await axiosPrivate.post(
        "/api/payment",
        { amount },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log("Status ", response?.status);

      if (response.status === 200) {
        const orderData = response.data;

        if (orderData.status === "created") {
          const options = {
            key: "rzp_test_8Uj7v7UNhteJA8",
            amount: response.data.amount,
            currency: "INR",
            name: "Helping Hands",
            description: "Donation",
            order_id: response.data.id,
            image: logo,
            handler: async (response) => {
              console.log("Payment SuccessFull !!");
              console.log(
                "razorpay_payment_id : ",
                response.razorpay_payment_id
              );
              console.log("razorpay_order_id : ", response.razorpay_order_id);
              console.log("razorpay_signature : ", response.razorpay_signature);

              try {
                const confirmResponse = await axiosPrivate.post(
                  "/api/payment/confirm",
                  {
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                  },
                  {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                  }
                );

                if (confirmResponse.status === "success") {
                  swal(
                    "Payment Completed!",
                    "Thank you for your payment.",
                    "success"
                  );
                } else {
                  swal(
                    "Payment Successful!",
                    "Thank you for your payment.",
                    "success"
                  );
                }
              } catch (err) {
                console.log(err);

                swal("Payment confirmation failed", "Try Again !!!", "error");
              }
            },
          };

          const rzpScript = document.createElement("script");
          rzpScript.src = "https://checkout.razorpay.com/v1/checkout.js";
          rzpScript.setAttribute("data-script-id", "your-script-id");
          rzpScript.onload = () => {
            const rzp = new window.Razorpay(options);
            rzp.open();
          };

          document.body.appendChild(rzpScript);
        }
      }
    } catch (err) {
      console.log(err);

      swal("Something went Wrong!!", "OOPs Try Again !!!", "error");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <form>
            <div>
              <h3>Donate Us</h3>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
              />
              <br />
              <br />

              <div className="text-center">
                <button
                  type="button"
                  className="w-100 btn btn-success btn-lg"
                  onClick={paymentHandler}
                >
                  PAY
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;

// import React, { useState } from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import logo from "../Navigation/logo.jpg";
// import swal from "sweetalert";

// function Payment() {
//   const [amount, setAmount] = useState("");
//   const axiosPrivate = useAxiosPrivate();

//   const paymentHandler = async (e) => {
//     e.preventDefault();
//     console.log("Payment Started...");
//     console.log("Amount transfer:", amount);

//     if (amount === "" || amount === null) {
//       alert("Amount is required!!");
//       return;
//     }

//     try {
//       const response = await axiosPrivate.post(
//         "/api/payment/createorder",
//         { amount },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(response?.data);
//       console.log("Status ", response?.status);

//       if (response.status === 200) {
//         const orderData = response.data;

//         if (orderData.status === "created") {
//           const options = {
//             key: "rzp_test_8Uj7v7UNhteJA8",
//             amount: response.data.amount,
//             currency: "INR",
//             name: "Helping Hands",
//             description: "Donation",
//             order_id: response.data.id,
//             handler: async (response) => {
//               console.log("Payment SuccessFul!!!");
//               console.log(response.razorpay_payment_id);
//               console.log(response.razorpay_order_id);
//               console.log(response.razorpay_signature);

//               // Send a request to your server to confirm payment success
//               try {
//                 const confirmResponse = await axiosPrivate.post(
//                   "/api/payment/confirm",
//                   {
//                     paymentId: response.razorpay_payment_id,
//                     orderId: response.razorpay_order_id,
//                   },
//                   {
//                     headers: { "Content-Type": "application/json" },
//                     withCredentials: true,
//                   }
//                 );

//                 if (confirmResponse.status === "success") {
//                   alert("Congrats !! Payment Successful");
//                 } else {
//                   alert("Payment confirmation failed");
//                 }
//               } catch (err) {
//                 console.log(err);
//                 alert("Payment confirmation failed");
//               }
//             },
//           };

//           const rzpScript = document.createElement("script");
//           rzpScript.src = "https://checkout.razorpay.com/v1/checkout.js";
//           rzpScript.setAttribute("data-script-id", "your-script-id");
//           rzpScript.onload = () => {
//             const rzp = new window.Razorpay(options);
//             rzp.open();
//           };

//           document.body.appendChild(rzpScript);
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Something went Wrong!!");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-12 col-lg-12">
//           <form>
//             <div>
//               <h3>Donate Us</h3>
//               <input
//                 type="text"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Enter Amount"
//               />
//               <div className="container text-center mt-4">
//                 <button onClick={paymentHandler}>Pay</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
