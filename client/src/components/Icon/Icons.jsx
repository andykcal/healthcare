// src/components/CategoryIcons.jsx
import React from 'react';
import './Icons.css';
import { useNavigate } from 'react-router';

const Icons = () => {
    const navigate=useNavigate()
    return (
        <div className="CategoryIcons">
            <div className="icon" onClick={()=>navigate("/bmi")}>Bmi</div>
            <div className="icon" onClick={()=>navigate("/shop")}>닭가슴살</div>
            <div className="icon" onClick={()=>navigate("/sport")}>운동</div>
            <div className='icon' onClick={()=>navigate("/sportproduct")}>운동용품</div>
            <div className='icon' onClick={()=>navigate("/cart")}>장바구니</div>
        </div>
    );
};

export default Icons;
