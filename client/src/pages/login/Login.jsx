import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; // 올바른 경로로 수정
import Navbar2 from "../../components/navbar/navbar2";
import "./login.css"; // 필요한 경우 CSS 파일 포함
import Footer from "../../components/footer/Footer";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log("apiUrl",apiUrl)
      const res = await axios.post(`${apiUrl}/auth/login`, credentials,{withCredentials:true});
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
      console.log("res.data.deatails",res.data.details);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

return (
  <div>
    <Navbar2/>
    <div className="loginContainer">
      <div className="loginWrapper">
          <h4>로그인</h4>
          <input
            id="username"
            type="text"
            className="loginInput"
            placeholder="아이디"
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            className="loginInput"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            onClick={handleClick}
            className="loginButton"
          >
            로그인
          </button>
          {error && <span>{error.message}</span>}
      </div>
    </div>
    <Footer/>
  </div>
  );
};
export default Login;
