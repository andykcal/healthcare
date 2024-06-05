import "./Bmi.css"
import React,{useState,useContext,useEffect} from "react";
import Navbar2 from "../../components/navbar/navbar2";
import BmiFooter from "./BmiFooter";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import Icons from "../../components/Icon/Icons";
const Bmi = () => {
    const [height,setHeight]=useState("");
    const[weight,setWeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const handleClick = () =>{
        if(!height && !weight){
            alert("값을 입력하세요")
        }else{
            const bmi = weight/(height*height)*10000
            if(bmi<18.5){
                setBmi(bmi+" ,저체중입니다.");
            }
            else if(bmi<=24.9){
                setBmi(bmi+" ,정상입니다.");

            }
            else if(bmi<=29.9){
                setBmi(bmi+ " ,과체중입니다.");
            }
            else if(bmi<=34.9){
                setBmi(bmi+" ,비만입니다.");
            }
            else{
                setBmi(bmi+" ,고도비만입니다.")

            }
        }
    }
return(
    <div>
    <Navbar2/>
    <Icons/>
    <div className="BmiContainer">
        <div className="BmiWrapper">
        <legend>키를 입력하세요(cm)</legend>
        <input value={height} className="BmiInput" onChange={(e)=>setHeight(e.target.value)} ></input>
        <legend>몸무게를 입력하세요(kg)</legend>
        <input value={weight} className="BmiInput" onChange={(e)=>setWeight(e.target.value)}></input>
        <button className="BmiButton" onClick={handleClick}>계산</button>
        <p>bmi={bmi}</p>
        <BmiFooter/>
        </div>
    </div>
    <Footer/>
</div>
        )
}
export default Bmi;