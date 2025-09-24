import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetStatus } from "../feature/auth/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const newUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, message } = newUser;

  useEffect(() => {
    if (isSuccess) {
      alert("Login successfully");
      navigate("/admin");
      dispatch(resetStatus());
    }
    if (isError) {
      alert(message || "Login failed");
      dispatch(resetStatus());
    }
  }, [isSuccess, isError, message, navigate, dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="container">
        <div className="auth-container" style={{ width: "25%" }}>
          <div className="auth-box">
            <div className="auth-header">
              <div className="auth-icon">
                <i className="fas fa-user"></i>
              </div>
              <h2>Welcome Back</h2>
              <p>Sign in to continue your interview preparation</p>
            </div>
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="login-email" style={{fontSize: "18px", fontWeight: "400"}}>Email</label>
                <input
                  name="email"
                  type="email"
                  id="login-email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="login-password" style={{fontSize: "18px", fontWeight: "400"}}>Password</label>
                <div className="password-toggle">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="error">{formik.errors.password}</div>
                  )}

                  <i
                    className={`far ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>

              <button
                type="submit"
                className="btn-login"
                disabled={isLoading || !formik.isValid || !formik.dirty}
              >
              {/* Login */}
                {isLoading ? "Login..." : "Login"}
              </button>

              <div className="auth-footer">
                <Link to="forgot-password" style={{fontSize: "18px", fontWeight: "400"}}>Forgot your password?</Link>
              </div>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="auth-footer">
                <Link to="/create-account" style={{fontSize: "18px", fontWeight: "400"}}>Don't have an account?</Link>
              </div>

              <div className="social-login">
                <button className="social-btn google" style={{fontSize: "18px", fontWeight: "400"}}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="social-btn linkedin" style={{fontSize: "18px", fontWeight: "400"}}>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
