import React ,{useContext}from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import Navbar2 from '../../components/navbar/navbar2';
const photos = [
    { id: 1, 
        title: '무항생제 닭가슴살', 
        count:1,
        price:"가격:16000원",
        text:"보관 방법:냉동 보관",
        rating:"별점:⭐ 4.9점 (105)",
        purchase:"판매량: 80,530팩 구매",
        url: 'https://www.dakgogimall.com/data/goods/1/2022/12/716_2022121917323115.jpg' },
    { id: 2, 
        title: '닭가슴살 블랙페퍼',
        count:1,
        price:"16600원",
        rating:"별점:⭐ 4.7점 (105)", 
        url: 'https://www.dakgogimall.com/data/goods/1/2022/12/_temp_16716016926959view.jpg' },
    { id: 3, 
        title: '닭가슴살 오리지널',
        price: "16600원",
        rating:"별점:⭐ 4.5점 (105)",
        url: 'https://img.danawa.com/prod_img/500000/567/492/img/9492567_1.jpg?_v=20200312114136' },
    { id: 4, 
        title: '맛있닭 닭가슴살 오리지널',
        price: "14400원",
        rating:"별점:⭐ 4.4점 (105)",
        url: 'https://file.rankingdak.com/image/RANK/PRODUCT/PRD001/20230704/IMG1688iTE451851701_600_600.jpg'},
    { id: 5, 
        title: '맛있닭 닭가슴살  볼 오리지널',
        price: "15500원",
        rating:"별점:⭐ 4.9점 (105)",
        url: 'https://images-kr.amoremall.com/unitproducts/FN2140008/FN2140008_01.jpg?1690852676160'},
    { id: 6, 
        title: '맛있닭 닭가슴살 볼 깻잎맛',
        price: "15500원", 
        rating:"별점:⭐ 4.9점 (105)",
        url: 'https://masitdak.com/data/item/1524625244/thumb-1608531377_1524625244_370x370.jpg'},
    { id: 7, 
        title: '맛있닭 소프트 닭가슴살 마늘맛',
        price: "16000원",
        rating:"별점:⭐ 4.9점 (105)",
        url: 'https://masitdak.com/data/item/1524625244/thumb-1608531377_1524625244_370x370.jpg'},
    { id: 8, 
        title: '맛있닭 닭가슴살 스테이크 프로',
        price: "14500원",
        rating:"별점:⭐ 4.9점 (105)",
        url: 'https://masitdak.com/data/item/1685680715/thumb-1685681460_1685680715_370x370.jpg'}


];
const ShopDetail = () => {
    const {user} = useContext(AuthContext);
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
    {user?( <div className='product-page'>
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
export default ShopDetail;
