
import React,{useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount,removeItem,addItem } from './cartslice';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate,useParams } from 'react-router';
import './Detail.css';
function Cart() {
  const navigate=useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {user} = useContext(AuthContext);
  if(!user){
    navigate("/login");
    return;
  }
  return (
    <div className='content'>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>사진</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><img src={item.url} alt={item.title} width="50" height="50"/></td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button onClick={() => dispatch(incrementCount({ id: item.id }))}>
                  +
                </button>
              </td>
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