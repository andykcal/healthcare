import "./Footer.css"
const Footer = () => {
  return (
  <div class="footer-content">
    <div class="company-info">
    <div className="CategoryIcons">
            <a>고객센터</a> |
            <a>공지사항</a> |
            <a>이용약관</a> |
            <a>개인정보처리방침</a> |
        </div>
      <p>(주)헬스케어</p>
      <p>대표: 김철수 | 주소: 서울특별시 송파구 , 15층(상암동, 누리꿈스퀘어 비지니스타워)</p>
      <p>사업자등록번호: 123-45-7899</p>
      <p>통신판매업신고번호: 제2015-서울마포-1058호 | 개인정보보호책임자: 김철수</p>
    </div>
    <div class="contact-info">
      <p>고객센터: 02-1111-1111</p>
      <p>FAX: 02-1234-5678 | E-mail: abcd@naver.com</p>
    </div>
  </div>
  );
};
export default Footer;
