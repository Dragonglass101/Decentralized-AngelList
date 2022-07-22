import React, { useEffect, useState } from "react";

const StartUp = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const cnameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div classname="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>

      <label for="First Name">
        <b>First Name</b>
      </label>
      <input type="text" placeholder="First Name" id="fname" required></input>
      <br></br>

      <label for="Last Name">
        <b>Last Name</b>
      </label>
      <input type="text" placeholder="Last Name" id="lname" required></input>
      <br></br>

      <label for="Company Name">
        <b>Company Name</b>
      </label>
      <input type="text" placeholder="Company Name" id="cname" required></input>
      <br></br>

      <p>
        To be classified as Accredited investor you will have to pay 5 Tez that
        will be returned after your confirmation.
      </p>

      <button onSubmit={handleSubmit} className="btn btn-outline-info">
        Pay/SignUp
      </button>
    </div>
  );
};
export default StartUp;
