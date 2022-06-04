import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Swal from "sweetalert2";
export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/adminscreen";
    }
  }, []);

  async function login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = await (await axios.post("/api/adminb/adminlogin", user)).data;      
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/adminscreen";
    } catch (error) {
      seterror(true);
      setloading(false);
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Admin Login
          </h2>

          {loading && <Loader />}
          {error && <Error error="Invalid Credentials" />}
          {success && <Success success="User Login Successfull" />}
          <div>
            <input
              required
              type="email"
              placeholder="Email: (admin@gmail.com)"
              className="form-control mt-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password: (1234)"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button
              onClick={login}
              className="btn btn-success mt-3 mb-3 rounded-pill"
            >
              LOGIN
            </button>
            <br />
           
          </div>
        </div>
      </div>
    </div>
  );
}
