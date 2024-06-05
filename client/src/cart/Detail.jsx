import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, removeItem, addItem } from './cartslice';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import './Detail.css';

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  
  };
  return (
    <div className='content'>
      {user ? (
        <button className='shopButton' onClick={() => navigate("/")}>뒤로 가기</button>
      ) : (
        <span>로그인하세요</span>
      )}
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>사진</th>
            <th>가격</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><img src={item.url} alt={item.title} width="200" height="200" /></td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
