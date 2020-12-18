import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { signupUser, clearSessionErrors } from "../../actions/session_actions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.session);
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, username, password, password2 };
    dispatch(signupUser(userInfo));
  };

  useEffect(() => {
    dispatch(clearSessionErrors());
  }, [clearSessionErrors]);

  const showErrors = () => {
    if (!Object.values(errors).length) return null;
    return Object.keys(errors).map((error, i) => (
          <p className="errors-body" key={`error-${i}`}>
            {errors[error]}
          </p>
        ))
  };

  return (
    <div className="signup-wrapper">
      <form id="signup-form" className="animate__animated animate__rubberBand" onSubmit={handleSubmit}>
        <h2 className="menutube">MenuTube</h2>

        <div className="username" data-error={errors.length ? errors : null}>
          <label htmlFor="signup-username">Username</label>
          <input
            id="signup-username"
            type="text"
            value={username}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="email" data-error={errors.length ? errors : null}>
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="password" data-error={errors.length ? errors : null}>
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="password2" data-error={errors.length ? errors : null}>
          <label htmlFor="signup-password2">Confirm Password</label>
          <input
            id="signup-password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        {showErrors()}
        <br />
        <input type="submit" value="Sign Up" className="session-btn" />

        <div>
          <span className="footer-login">
            Already have an account?
            <div className="footer-btn">
              <div
                className="other-btn"
                onClick={() => dispatch(openModal("login"))}
              >
                Log in
              </div>
            </div>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
