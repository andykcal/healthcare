import Navbar2 from '../../components/navbar/navbar2';
import './MyPage.css';
import { AuthContext } from "../../context/AuthContext";
import React,{useEffect, useState,useContext} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import '../../cart/Detail.css';
axios.defaults.baseURL = process.env.REACT_APP_API_URL||"http://localhost:8800/api";
axios.defaults.withCredentials=true;



const Mypage = () =>{
    const[mpData,setMpData] = useState({
        phone:"",
        img:"",
    });    
    const [newImage,setNewImage]=useState(null);
    const [editMode,setEditMode]=useState(false);
    const {user,dispatch} =useContext(AuthContext);
    const navigate=useNavigate();
    useEffect(() => {
        if(user){
            setMpData({
                username:user.username,
                email:user.email,
                phone:user.phone,
                img:user.img,
                id:user.id,
            });
        }
    },[user]);
    const handleChange = (e) =>{
        const{name,value,files} = e.target;
        if(name === "img" && files){
            setNewImage(files[0]);
        }else{
            setMpData((prevData) => ({
                ...prevData,
                [name]:value
            }));
        }
    }
    const handleEdit = () => {
        setEditMode(true);
    };
    const handleSave = async() => {
        try{
            const apiUrl =process.env.REACT_APP_API_URL;
            const userId=user._id;
            const updatedData = {...mpData};

            console.log(updatedData);

            if(newImage){
                    const formData = new FormData();
                    formData.append("file",newImage);
                    const uploadRes = await axios.put(`${apiUrl}/users/${userId}/profile-image`,
                    formData,{withCredentials:true});
                    updatedData.img = uploadRes.data.filePath;
                    console.log(updatedData.img)
            }
             const res = await axios.put(`${apiUrl}/users/${userId}`,
                updatedData,{withCredentials:true});
                alert("프로필이 성공적으로 업데이트되었습니다.");
                dispatch({type:"UPDATE_SUCCESS",
                    payload:res.data});
                    setEditMode(false);
                    navigate("/mypage");
       }catch(err){
        console.log("err:",err);
            alert("프로필 업데이트 중 오류가 발생했습니다.");
        }
    };
        const{username,email,phone,img,id} = mpData;
        console.log("사진:",img)
return(
    <div>
    <Navbar2/>
    <div className="MyPageContainer">
        <div className="MyPageWrapper">
            
            {editMode?(
                <div>
        <div className='myPageInfo'>
        <input type="file" id="img" name='img' onChange={handleChange}/>
        </div>
        <div className='myPageInfo'>
        <p>이름:{id}</p>
        </div>
        <div className='myPageInfo'>
        <p>아이디:{username}</p>   
        </div>
        <div className='myPageInfo'>
        이메일: <input type="email" id="email" name="email" className='mypageInput' onChange={handleChange}></input>   
        </div>
        <div className='myPageInfo'>
        핸드폰: <input type="text" id="phone" name="phone" className='mypageInput' onChange={handleChange}></input>
        </div>

            <button onClick={handleSave} className='MyPageButton'>수정완료</button>
            </div>//버튼을 누르면 변경된 정보를 서버에 저장하고 전 화면으로 이동
            ):(
          <>
                {img && <img src= {`${process.env.REACT_APP_API_IMAGE_URL}${img}`}
                alt="Profile" className='profile-image'/>}
                <div className='MyPageContainer'>
                    <h2>마이페이지</h2>
                </div>
                <div className='myPageInfo'>
                    <p><strong>이름:</strong>
                    {id}</p>
                    <p><strong>아이디:</strong>
                    {username}</p>
                    <p><strong>이메일:</strong>
                    {email}</p>
                    <p><strong>핸드폰:</strong>
                    {phone}</p>
                </div>
                <button onClick={handleEdit}
                className='MyPageButton'>수정</button>
                </>   //버튼을 누르면 수정 화면으로 이동
            )}      
            </div>
        </div>
        <Footer/>
    </div>
    );
};
export default Mypage;