import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isActiveBtn = userName.length > 0 && password.length > 0;
  const submit = async () => {
    console.log(userName);
    console.log(password);
    // navigate("board");
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (val: string) => void
  ) => {
    setState(e.target.value);
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
            <input
              className="form-input-content"
              placeholder="Enter email"
              value={userName}
              onChange={(e) => onInputChange(e, setUserName)}
            />
            <input
              type="password"
              className="form-input-content"
              placeholder="Enter password"
              value={password}
              onChange={(e) => onInputChange(e, setPassword)}
            />
            <button
              className={`btn ${isActiveBtn ? "" : "btn-disabled"}`}
              disabled={!isActiveBtn}
              onClick={submit}
            >
              <label
                className={`btn-label ${isActiveBtn ? "color-white" : ""}`}
              >
                Login
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
