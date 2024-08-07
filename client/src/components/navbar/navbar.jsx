import { useNavigate, Link } from "react-router-dom"
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState } from "react"
import axios from "axios";

const Navbar = () => {
  const {loading,error,dispatch} = useContext(AuthContext);
  const {user} = useContext(AuthContext);
  const navigate=useNavigate();

  const Login = () => {
    navigate("/login");
  };
  const Register = () => {
    navigate("/checkbox");
  };
  const Mypage = () => {
    navigate("/mypage");
  }
  const logout = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log("apiUrl",apiUrl)
      // if (!apiUrl) {
      //   throw new Error("API URL is not defined in the environment variables");
      // }
      const res = await axios.post(`${apiUrl}/auth/logout`, {}, 
        {withCredentials: true});
      console.log("res.data",res.data);
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("An error occurred while logging out. Please try again.");
      console.log("user.id",user.id);
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
      {user?(
        <button className="navButton" onClick={Mypage}>마이페이지</button>
            ):(
        <span>로그인하세요</span>
      )}
      <button className="logo" onClick={()=>navigate("/")}>Healthcare</button>    
        {user?  (
        <div className="navItems">
          {user.username}님 환영합니다!
          <button className="navButton" onClick={logout}>로그아웃</button> 
        </div>
        ): (
        <div className="navItems">
          <button className="navButton" onClick={Register}>회원가입</button>
          <button className="navButton" onClick={Login}>로그인</button>
        </div>
        )}
      </div>
    </div>
  )
}
export default Navbar