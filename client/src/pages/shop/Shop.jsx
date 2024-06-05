import Navbar2 from "../../components/navbar/navbar2";
import "./Shop.css"
import { Link } from "react-router-dom";
import CategoryIcons from "../../components/Icon/Icons";
import Icons from "../../components/Icon/Icons";
import Footer from "../../components/footer/Footer";
const photos = [
{   id: 1, 
        title: '무항생제 닭가슴살',
        price: "16000원", 
        url: 'https://www.dakgogimall.com/data/goods/1/2022/12/716_2022121917323115.jpg' },
{   id: 2, 
        title: '닭가슴살 블랙페퍼',
        price: "16600원", 
        url: 'https://www.dakgogimall.com/data/goods/1/2022/12/_temp_16716016926959view.jpg' },
{   id: 3, 
        title: '닭가슴살 오리지널',
        price: "16600원",  
        url: 'https://img.danawa.com/prod_img/500000/567/492/img/9492567_1.jpg?_v=20200312114136' },
{   id: 4, 
        title: '맛있닭 닭가슴살 오리지널',
        price: "14400원",  
        url:'https://file.rankingdak.com/image/RANK/PRODUCT/PRD001/20230704/IMG1688iTE451851701_600_600.jpg'},
{   id: 5, 
        title: '맛있닭 닭가슴살  볼 오리지널',
        price: "15500원",  
        url:'https://images-kr.amoremall.com/unitproducts/FN2140008/FN2140008_01.jpg?1690852676160'},
{   id: 6, 
        title: '맛있닭 닭가슴살 볼 깻잎맛',
        price: "15500원",  
        url:'https://masitdak.com/data/item/1526471342/thumb-1676626738_1526471342_370x370.jpg'},
{   id: 7, 
        title: '맛있닭 소프트 닭가슴살 마늘맛',
        price: "16000원",  
        url:'https://masitdak.com/data/item/1524625244/thumb-1608531377_1524625244_370x370.jpg'},
{   id: 8, 
        title: '맛있닭 닭가슴살 스테이크 프로',
        price: "14500원",  
        url:'https://masitdak.com/data/item/1685680715/thumb-1685681460_1685680715_370x370.jpg'},
];

const Shop = ()=>{
     return(
<div>
    <Navbar2/>
    <Icons/>
    <div className="photo-grid">
    {photos.map(photo => (
        <div key={photo.id}>
            <Link to={`/shop/${photo.id}`}>
            <img src={photo.url} alt={photo.title} className="img"/>
            </Link>
            <div className="photo-info">
                <p>{photo.title}</p>
                <p>{photo.price}</p>
            </div>
        </div>
    ))}
    </div>
    <Footer/>
</div>
    );
}
export default Shop;