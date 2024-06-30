import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const submit = async () => {
    console.log(userName);
    console.log(password);
    navigate("board");
  };

  return (
    <div className="container">
      <div className="form-login-container">
        <div className="form-login-top">
          <div className="form-login-title">Welcome To</div>
          <img src="" alt="icon" className="login-logo" />
        </div>
        <div className="form-login-bottom">
          <div className="form-input-title">Login</div>
          <div className="form-input-container">
            <input className="form-input-content" placeholder="Enter email" />
            <input
              className="form-input-content"
              placeholder="Enter password"
            />
            <button className="btn" onClick={submit}>
              <label className="btn-label">Login</label>
            </button>
          </div>
        </div>

        {/* 
        <div className="form-input">
          <div className="form-input-title">Username</div>
          <input
            className="form-input-content"
            placeholder="Username / Email"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>

        <div className="form-input">
          <div className="form-input-title">Password</div>
          <input
            className="form-input-content"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></input>
        </div>
        <button className="form-input-content btn" onClick={submit}>
          Save
        </button> */}
      </div>
    </div>
  );
};
export default Login;
