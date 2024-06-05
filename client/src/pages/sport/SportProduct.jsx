import './Sport.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar2 from '../../components/navbar/navbar2';
import Icons from '../../components/Icon/Icons';
import Footer from '../../components/footer/Footer';
const SportProduct = () =>{
    const photos = [
            {   id: 1, 
                    title: '스트랩',
                    price:"25000원",
                    url: 'https://kun6man.com/shopimages/kun6man02/1790000000023.jpg' },
            {   id: 2, 
                    title: '팔꿈치 보호대',
                    price:"30000원",
                    url: 'https://m.isilence.co.kr/web/product/big/202204/2e1395cabf2d27b4764fd3dcf7c3dabd.jpg' },
            {   id: 3, 
                    title: '파워 리프팅 밸트',
                    price:"50000원",
                    url: 'https://img.danawa.com/prod_img/500000/668/987/img/12987668_1.jpg?_v=20201223110637' },
            {   id: 4, 
                    title: '풀업밴드',
                    price:"10000원",
                    url:'https://img.danawa.com/prod_img/500000/599/362/img/5362599_1.jpg?_v=20221026145557'},
            {   id: 5, 
                    title: '쉐이커통',
                    price:"15000원",
                    url:'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3444903266/B.jpg?236000000'},
            {   id: 6, 
                    title: '더플백',
                    price:"55000원",
                    url:'https://item.elandrs.com/r/image/item/2023-07-06/8930ca4a-72a5-44f2-af86-9bbdafd4014b.jpg?w=750&h=&q=100'},
            {   id: 7, 
                    title: '무릎보호대',
                    price:"24000원",
                    url:'https://gd.image-gmkt.com/%EC%8D%AC%EB%B2%84%EB%93%9C-%EC%BF%A0%EC%85%98-%ED%8C%94%EA%BF%88%EC%B9%98-%EB%B3%B4%ED%98%B8%EB%8C%80-%EB%B0%B0%EA%B5%AC-%ED%95%B8%EB%93%9C%EB%B3%BC-%EC%97%98%EB%B3%B4%EC%95%84%EB%8C%80-645/li/796/010/1755010796.g_350-w-et-pj_g.jpg'},
            {   id: 8, 
                    title: '푸쉬업바',
                    price:"14000원",
                    url:'https://m.alphasports.co.kr/web/product/big/20200629/19020f556c87782d911888ed43de5f79.jpg'},    
        ];
    return(
<div>
        <Navbar2/>
        <Icons/>  
    <div className='SportContainer'>
       {photos.map(photo => (
        <div key={photo.id}>
            <Link to={`/sportproduct/${photo.id}`}>
            <img src={photo.url} alt={photo.title} className="Sportimg"/>
            </Link>
                <div className='photo-info'>
                        <p>{photo.title}</p>
                        <p>{photo.price}</p>
                </div>
        </div>
       ))}
    </div>
        <Footer/>
</div>
    )
}
export default SportProduct;