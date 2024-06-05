import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import './Register.css'
import Navbar2 from "../../components/navbar/navbar2";
import axios from "axios";
import Footer from "../../components/footer/Footer";
const Register = () => {
    
    const[credentials,setCredentials]=useState({
        username:undefined,
        password:undefined,
        phone:undefined,
        email:undefined,
        id:undefined
    });
    const {loading,error,dispatch}=useContext(AuthContext);
    
    const navigate =useNavigate()
    
    const handleChange2 = (e) => {
        setCredentials((prev) => ({...prev,[e.target.id]:e.target.value}));
    };
    const handleClick2 = async(e) => {
        
        e.preventDefault();
        dispatch({type:"Register"});
        try{
            const apiUrl =process.env.REACT_APP_API_URL;
            console.log("apiUrl:",apiUrl)
            const res = await axios.post(`${apiUrl}/auth/register`,credentials,{withCredentials:true});
            dispatch({type:"REGISTER_SUCCESS",payload:res.data.details});
            navigate("/")
            console.log(res.data.details);
        }catch(err){
            dispatch({type:"REGISTER_FAILURE",payload:err.response.data});
        }
    }
return(
<div>
    <Navbar2/>
    <div className="registerContainer">
        <div className="registerWrapper" action="/register" method="POST">
    <h4>회원가입</h4>
    <input id="id" type="text" placeholder="이름" className="registerInput" onChange={handleChange2}></input>
    <input id="username" type="text" placeholder="아이디" className="registerInput" onChange={handleChange2}></input>
    <input id="password" type="password" placeholder="비밀번호" className="registerInput" onChange={handleChange2}></input>
    <input id="phone" type="number" placeholder="핸드폰" className="registerInput" onChange={handleChange2}></input>
    <input id="email" type="email" placeholder="이메일" className="registerInput" onChange={handleChange2}></input>
    <button type="submit" className="registerButton" onClick={handleClick2}>회원가입</button>
        </div>
    </div>
    <Footer/>
</div>
)
};
export default Register;
