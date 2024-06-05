import Navbar2 from '../../components/navbar/navbar2';
import './MyPage.css';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const MyPage = () => {
    const {user,dispatch} =useContext(AuthContext);

    return(
    <div>
        <Navbar2/>
        <div className="MyPageContainer">
            <div className="MyPageWrapper">
            <h2>마이페이지</h2>
            <h2>아이디:{user.username}</h2>
            <h2>이메일:{user.email}</h2>
            <h2>전화번호:{user.phone}</h2>
            </div>        
        </div>
    </div>
    )
}
export default MyPage;