import './Sport.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar2 from '../../components/navbar/navbar2';
import Footer from '../../components/footer/Footer';
import Icons from '../../components/Icon/Icons';

const Sport = () =>{
    const photos = [
            {   id: 1, 
                    title: '달리기',
                    url: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-running-boy-illustration-image_1230160.jpg' },
            {   id: 2, 
                    title: '벤치프레스',
                    url: 'https://media.istockphoto.com/id/1028234906/ko/%EB%B2%A1%ED%84%B0/%EB%82%A8%EC%9E%90%EB%8A%94-%EB%B2%A4%EC%B9%98%EC%97%90-%EB%88%84%EC%9B%8C-%EB%B0%94-%EB%B2%A8%EC%9C%BC%EB%A1%9C-%EC%9A%B4%EB%8F%99-%EB%B2%A4%EC%B9%98-%ED%82%A4%EB%A5%BC-%EB%88%84%EB%A6%85%EB%8B%88%EB%8B%A4-%ED%94%BC%ED%8A%B8-%EB%8B%88%EC%8A%A4-%EC%9E%A5%EB%B9%84-%EC%9E%91%EC%97%85%EC%9D%98-%EB%8B%A4%EC%B1%84%EB%A1%9C%EC%9A%B4-%EC%95%84%EC%9D%B4%EC%86%8C%EB%A9%94%ED%8A%B8%EB%A6%AD-illlustration%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=612x612&w=0&k=20&c=jtVDPl1k1V_MmjKXhzhjukp_9NUoQv6Bnq6u3HC7qO0=' },
            {   id: 3, 
                    title: '스쿼트',
                    url: 'https://previews.123rf.com/images/lioputra/lioputra2208/lioputra220800166/190179008-%EB%B0%94%EB%B2%A8-%EC%9A%B4%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%8A%A4%EC%BF%BC%ED%8A%B8%EB%A5%BC-%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90.jpg' },
            {   id: 4, 
                    title: '데드리프트',
                    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQovZIy5d6R8dwy2Jz2_84YBAYqjmi5cG4A&s'},
            {   id: 5, 
                    title: '풀업',
                    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUTGqCVEobbY4wIxKX7GsHyaAo6RfjxWuAQ&s'},
            {   id: 6, 
                    title: '덤벨프레스',
                    url:'https://previews.123rf.com/images/parkheta/parkheta2103/parkheta210300121/166104599-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8D%A4%EB%B2%A8-%EC%88%84%EB%8D%94-%ED%94%84%EB%A0%88%EC%8A%A4-%EC%9A%B4%EB%8F%99-%EC%9A%B4%EB%8F%99-%EB%B2%A1%ED%84%B0-%EC%82%BD%ED%99%94.jpg'},
            {   id: 7, 
                    title: '런지',
                    url:'https://previews.123rf.com/images/lioputra/lioputra2206/lioputra220600161/187713645-%EB%8D%A4%EB%B2%A8-%EC%9B%8C%ED%82%B9-%EB%9F%B0%EC%A7%80-%EC%9A%B4%EB%8F%99%EC%9D%84-%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90.jpg'},
            {   id: 8, 
                    title: '바벨로우',
                    url:'https://www.shutterstock.com/image-vector/man-doing-bent-over-barbell-600nw-1831637863.jpg'},    
        ];
    return(
<div>
        <Navbar2/>
        <Icons/>  
    <div className='SportContainer'>
       {photos.map(photo => (
        <div key={photo.id}>
            <Link to={`/sport/${photo.id}`}>
            <img src={photo.url} alt={photo.title} className="Sportimg"/>
            </Link>
            <div className='photo-info'>
                <p>{photo.title}</p>
            </div>
        </div>
       ))}
    </div>
        <Footer/>
</div>
    )
}
export default Sport;