import { useState } from "react";
import "./LoginPage.css";
import {
  FaCalendarAlt,
  FaGlobe,
  FaGlobeEurope,
  FaLightbulb,
  FaLock,
  FaPlane,
  FaSuitcase,
  FaUser,
} from "react-icons/fa";
import { FaEnvelope, FaPhone, FaUnlock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    rusername: "",
    rpassword: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9]).+$/;

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterForm((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmitLogin = () => {
    let errorsCount = 0;
    setErrors([]);

    if (loginForm.username === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Username"]);
    } else if (
      loginForm.username.length < 6 ||
      loginForm.username.length > 16 ||
      loginForm.username.includes(" ")
    ) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Username"]);
    }

    if (loginForm.password === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Password"]);
    } else if (
      loginForm.password.length < 10 ||
      loginForm.password.length > 24 ||
      !passwordRegex.test(loginForm.password)
    ) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Password"]);
    }

    if (errorsCount === 0) {
      navigate("/");
    }
  };

  const handleSubmitRegister = () => {
    let errorsCount = 0;
    setErrors([]);

    if (registerForm.rusername === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Username"]);
    } else if (
      registerForm.rusername.length < 6 ||
      registerForm.rusername.length > 16 ||
      registerForm.rusername.includes(" ")
    ) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Username"]);
    }

    if (registerForm.rpassword === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Password"]);
    } else if (
      registerForm.rpassword.length < 10 ||
      registerForm.rpassword.length > 24 ||
      !passwordRegex.test(registerForm.rpassword)
    ) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Password"]);
    }

    if (registerForm.email === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Email"]);
    } else if (!registerForm.email.includes("@")) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Email"]);
    }

    if (registerForm.phone === "") {
      errorsCount++;
      setErrors((err) => [...err, "Missing Phone"]);
    } else if (registerForm.phone.length !== 9) {
      errorsCount++;
      setErrors((err) => [...err, "Invalid Phone"]);
    }

    if (errorsCount === 0) {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-page-container">
          <div className="form-card">
            {isLogin ? (
              <div className="form-card-login" key={"login"}>
                <h1>Sign In</h1>
                <label htmlFor="username">Username</label>
                <span className="form-card-item">
                  <FaUser size={25} />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    required
                  />
                </span>
                <label htmlFor="password">Password</label>
                <span className="form-card-item">
                  {isShowPass ? (
                    <FaUnlock
                      size={25}
                      onClick={() => {
                        setIsShowPass(!isShowPass);
                      }}
                    />
                  ) : (
                    <FaLock
                      size={25}
                      onClick={() => {
                        setIsShowPass(!isShowPass);
                      }}
                    />
                  )}
                  <input
                    type={isShowPass ? "text" : "password"}
                    name="password"
                    id="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </span>
                <span className="form-card-stay">
                  <input
                    type="checkbox"
                    name="stayloggedin"
                    id="stayloggedin"
                  />
                  <label htmlFor="stayloggedin">I want to stay signed in</label>
                </span>
                <p className="login-errors">{errors.join(", ")}</p>
                <button
                  className="submit-button"
                  id="sign-in"
                  onClick={handleSubmitLogin}
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="form-card-register" key={"register"}>
                <h1>Sign Up</h1>
                <label htmlFor="reg-username">Username</label>
                <span className="form-card-item">
                  <FaUser size={25} />
                  <input
                    type="text"
                    name="rusername"
                    id="rusername"
                    value={registerForm.rusername}
                    onChange={handleRegisterChange}
                    required
                  />
                </span>
                <label htmlFor="reg-password">Password</label>
                <span className="form-card-item">
                  {isShowPass ? (
                    <FaUnlock
                      size={25}
                      onClick={() => {
                        setIsShowPass(!isShowPass);
                      }}
                    />
                  ) : (
                    <FaLock
                      size={25}
                      onClick={() => {
                        setIsShowPass(!isShowPass);
                      }}
                    />
                  )}
                  <input
                    type={isShowPass ? "text" : "password"}
                    name="rpassword"
                    id="rpassword"
                    value={registerForm.rpassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </span>
                <label htmlFor="email">Email adress</label>
                <span className="form-card-item">
                  <FaEnvelope size={25} />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </span>
                <label htmlFor="phone">Phone number</label>
                <span className="form-card-item">
                  <FaPhone size={25} />
                  <p>+36</p>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={registerForm.phone}
                    onChange={handleRegisterChange}
                    required
                  />
                </span>
                <p className="register-errors">{errors.join(", ")}</p>
                <button
                  className="submit-button"
                  id="sign-up"
                  onClick={handleSubmitRegister}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
          <div className="switch-card">
            <h2>
              {isLogin
                ? "New here? Start your journey with us."
                : "Already exploring the world with us? Log back in and continue!"}
            </h2>
            <p>
              {isLogin
                ? "Create an account to explore destinations, plan trips and save your favorite adventures."
                : "Sign in to continue your adventures and pick up where you left off."}
            </p>
            {isLogin ? (
              <ul>
                <li>
                  <span className="feature-list">
                    <FaGlobeEurope size={25} />
                    <span>Discover new cities</span>
                  </span>
                </li>
                <li>
                  <span className="feature-list">
                    <FaPlane size={25} />
                    <span>Plan your next trip easily</span>
                  </span>
                </li>
                <li>
                  <span className="feature-list">
                    <FaSuitcase size={25} />
                    <span>Save itineraries in one place</span>
                  </span>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <span className="feature-list">
                    <FaCalendarAlt size={25} />
                    <span>View saved itineraries</span>
                  </span>
                </li>
                <li>
                  <span className="feature-list">
                    <FaGlobe size={25} />
                    <span>Access all destinations</span>
                  </span>
                </li>
                <li>
                  <span className="feature-list">
                    <FaLightbulb size={25} />
                    <span>Get personalized trip ideas</span>
                  </span>
                </li>
              </ul>
            )}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors([]);
              }}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 TravelMe - Made for a web development project.</p>
      </footer>
    </div>
  );
};
