import React from 'react';
import './Product.css';

const ProductPage = () => {
  const handleAddToCart = () => {
    alert("상품이 장바구니에 담겼습니다!");
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src="https://masitdak.com/data/item/1685680715/thumb-1685681460_1685680715_370x370.jpg" alt="저당 소스 통 닭가슴살" />
      </div>
      <div className="product-details">
        <h1>[맛있닭] 저당 소스 통 닭가슴살 37% 할인</h1>
        <div className="rating">
          <span>⭐ 4.9점 (105)</span>
        </div>
        <div className="price">
          <span className="discount">37%</span>
          <span className="current-price">19,400원</span>
          <span className="original-price">30,690원</span>
        </div>
        <div className="purchase-info">
          <span>판매량: 80,530팩 구매</span>
          <span>배송방법: 3,500원 | 20,000원 이상 무료배송</span>
          <span>상품구성: 혼합 9팩 : 3종 각 3팩</span>
          <span>보관방법: 냉동 보관</span>
          <span>공지사항: [수량 한정] 재고 소진 시, 조기 종료됩니다.</span>
          <span>* 본 상품은 오렌지 멤버스 혜택 적용이 불가합니다.</span>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>장바구니에 담기</button>
      </div>
    </div>
  );
};

export default ProductPage;