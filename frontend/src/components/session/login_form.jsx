import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearSessionErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import "./login_form.css";

const LoginForm = () => {
  const errors = useSelector((state) => state.errors.session);

  const dispatch = useDispatch();

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(clearSessionErrors());
  }, [clearSessionErrors]);

  const handleSubmit = () => {
    const userInfo = { username, password };
    dispatch(loginUser(userInfo)).then(() => dispatch(closeModal()));
  };

  const showErrors = () => {
    if (!errors.length) return null;
    return (
      <div className="errors">
        {errors.map((error, i) => (
          <p className="errors-body" key={`error-${i}`}>
            {error}
          </p>
        ))}
      </div>
    );
  };
  return (
    <div className="login-wrapper">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2 className="menutube">Menutube</h2>

        <div className="username" data-error={errors.length ? errors : null}>
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="password" data-error={errors.length ? errors : null}>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="login-password"
            required
          />
        </div>
        <div className="signin-errors">{showErrors()}</div>

        <input type="submit" value="Log In" className="session-btn" />

        <div>
          <span className="footer-login">
            Don't have an account?
            <div className="footer-btn">
              <div onClick={() => dispatch(openModal("signup"))}>Sign up</div>
            </div>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
