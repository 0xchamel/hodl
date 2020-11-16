import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { login, register } from "../../reducers/user";

import "./Auth.scss";

const AuthPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.user);
  const isLoggedIn = !(!accessToken || accessToken === "");

  if (isLoggedIn) history.push("/profile");

  const [ip, setIP] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState({ text: "", success: true });
  const [isLogin, setIsLogin] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    dispatch(login(loginInfo.email, loginInfo.password)).then((res) => {
      setNotification(
        !res
          ? { text: "Login action has been failed.", success: false }
          : { text: "", success: false }
      );
      if (res) history.push("/profile");
    });
  };

  const handleRegister = (e) => {
    if (e) e.preventDefault();
    dispatch(
      register(
        registerInfo.firstName,
        registerInfo.lastName,
        registerInfo.email,
        registerInfo.password,
        ip
      )
    ).then((res) => {
      setNotification({
        text: "Registration has been successfully done.",
        success: true,
      });
      setIsLogin(true);
    });
  };

  useEffect(() => {
    if (isLogin && loginInfo) setNotification({ text: "", success: false });
  }, [isLogin, loginInfo]);

  useEffect(() => {
    if (!isLogin && registerInfo) setNotification({ text: "", success: false });
  }, [isLogin, registerInfo]);

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      setIP(res.data.ip);
    });
  }, []);

  return (
    <div className="auth">
      {isLogin ? (
        <form className="auth__login" onSubmit={handleLogin}>
          <p
            key={notification.text}
            className="auth__notification"
            style={{ color: notification.success ? "#8bc34a" : "#ff3d00" }}
          >
            {notification.text}
          </p>

          <input
            type="email"
            placeholder="Type your email address"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Type your password"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <p onClick={() => setIsLogin(false)}>Register</p>
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="auth__register" onSubmit={handleRegister}>
          <p
            key={notification.text}
            className="auth__notification"
            style={{ color: notification.success ? "#8bc34a" : "#ff3d00" }}
          >
            {notification.text}
          </p>
          <input
            type="name"
            placeholder="First Name"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, firstName: e.target.value })
            }
          />
          <input
            type="name"
            placeholder="Last Name"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, lastName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Type your email address"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Type your password"
            onChange={(e) =>
              setRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          <div
            className="auth__agree-terms"
            onClick={() => setAgreeTerms(!agreeTerms)}
          >
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />{" "}
            <span>
              I agree with{" "}
              <a href="/terms" onClick={(e) => e.stopPropagation()}>
                terms of the platform
              </a>
            </span>
          </div>
          <p onClick={() => setIsLogin(true)}>Login</p>
          <button type="submit" disabled={!agreeTerms}>
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
