import React,{useContext} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Navbar2 from '../../components/navbar/navbar2';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import './Sport.css'
const photos = [
    { id: 1, 
      title: '스트랩',
      price:"25000원",
      rating:"별점:⭐ 4.4점 (105)",
      url: 'https://kun6man.com/shopimages/kun6man02/1790000000023.jpg' },
    { id: 2, 
      title: '팔꿈치 보호대',
      price:"30000원",
      rating:"별점:⭐ 4.4점 (105)",
      url: 'https://m.isilence.co.kr/web/product/big/202204/2e1395cabf2d27b4764fd3dcf7c3dabd.jpg' },
    { id: 3, 
      title: '파워 리프팅 밸트',
      price:"50000원",
      rating:"별점:⭐ 4.4점 (105)",
      url: 'https://img.danawa.com/prod_img/500000/668/987/img/12987668_1.jpg?_v=20201223110637' },
    { id: 4, 
      title: '풀업밴드',
      price:"10000원",
      rating:"별점:⭐ 4.4점 (105)",
      url: 'https://img.danawa.com/prod_img/500000/599/362/img/5362599_1.jpg?_v=20221026145557'},
    { id: 5, 
        title: '쉐이커통',
        price:"15000원",
        rating:"별점:⭐ 4.4점 (105)",
        url: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3444903266/B.jpg?236000000'},
    { id: 6, 
        title: '더플백',
        price:"55000원",
        rating:"별점:⭐ 4.4점 (105)",
        url: 'https://item.elandrs.com/r/image/item/2023-07-06/8930ca4a-72a5-44f2-af86-9bbdafd4014b.jpg?w=750&h=&q=100'},
    { id: 7, 
        title: '무릎 보호대',
        price:"24000원",
        rating:"별점:⭐ 4.4점 (105)",
        url: 'https://gd.image-gmkt.com/%EC%8D%AC%EB%B2%84%EB%93%9C-%EC%BF%A0%EC%85%98-%ED%8C%94%EA%BF%88%EC%B9%98-%EB%B3%B4%ED%98%B8%EB%8C%80-%EB%B0%B0%EA%B5%AC-%ED%95%B8%EB%93%9C%EB%B3%BC-%EC%97%98%EB%B3%B4%EC%95%84%EB%8C%80-645/li/796/010/1755010796.g_350-w-et-pj_g.jpg'},
    { id: 8, 
        title: '푸쉬업바',
        price:"14000원",
        rating:"별점:⭐ 4.4점 (105)",
        url: 'https://m.alphasports.co.kr/web/product/big/20200629/19020f556c87782d911888ed43de5f79.jpg'},
];
const SportProductDetail = () => {
    const {user} = useContext(AuthContext);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { id } = useParams();
    const photo = photos.find(p => p.id === parseInt(id));
    const handleAddToCart = () => {
      dispatch({ type: 'ADD_TO_CART', payload: photo });
      alert('장바구니에 상품이 추가되었습니다!');
      navigate("/cart");
      console.log("장바구니:",photo)
    };

    if (!photo) {
        return <div>Photo not found</div>;
    }
    return (
    <div>
      <Navbar2/>
    {user?(<div className='product-page'>
                <div className='product-img'>
                <img src={photo.url} alt={photo.title}/>
                </div>
                <div className='purchase-info'>
                    <h1>{photo.title}</h1>
                    <span>{photo.purchase}</span>
                    <span>{photo.rating}</span>
                    <span>{photo.text}</span>
                    <span>{photo.price}</span>
                </div>
            </div>
            ):(
  <span>로그인하세요</span>
    )}
  <button className='shopButton' onClick={handleAddToCart}>장바구니에 담기</button>
    <Footer/>
  </div>
    );
};
export default SportProductDetail;