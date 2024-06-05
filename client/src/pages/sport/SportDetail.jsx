import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Navbar2 from '../../components/navbar/navbar2';
import './Sport.css'
const photos = [
    { id: 1, 
      title: '달리기',
      text:"달리기는 몸무게를 줄이는데 도움을 주며, 체형을 유지시킨다. 달리기는 대사작용을 증가시킨다. 달리기를 할 때, 각 개인의 건강 수준에 따라 적절한 달리는 속도와 거리는 다르다. 초심자의 경우 달리기가 몸에 맞아지는 시간이 필요하다. 꾸준함과 천천히 속도와 거리를 늘리는 것이 중요하다. 달리는동안 자신의 몸의 느낌에 집중하는 것이 최선의 방법이다. 만약 달리는 동안 숨이 차거나 지치는 느낌이 있는 경우 속도를 늦추거나 짧은 거리를 몇주간 달리는 것이 더 효과적이다. 그러다가 달리는 페이스나 거리가 더 이상 몸에 부치지 않는다면 속도를 더 내거나 더 먼 거리를 달리면 된다", 
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ762Te-cNZW8QKUZd75xbYGaNjvhh9uijhTw&s' },
    { id: 2, 
      title: '벤치프레스', 
      text:"팔이 직선으로 곧게 뻗도록 바벨을 쭉 올리고 궤도가 변하지 않도록 유의하며 그대로 팔을 뒤로 굽혀 가슴을 향해 바벨을 끌어당겨준다. 중량은 가벼운것부터 실시하여 벤치프레스 자세를 먼저 제대로 익히고 중량을 높여나가는것이 효과도 좋고 부상도 방지할수있다",
      url: 'https://media.istockphoto.com/id/1028234906/ko/%EB%B2%A1%ED%84%B0/%EB%82%A8%EC%9E%90%EB%8A%94-%EB%B2%A4%EC%B9%98%EC%97%90-%EB%88%84%EC%9B%8C-%EB%B0%94-%EB%B2%A8%EC%9C%BC%EB%A1%9C-%EC%9A%B4%EB%8F%99-%EB%B2%A4%EC%B9%98-%ED%82%A4%EB%A5%BC-%EB%88%84%EB%A6%85%EB%8B%88%EB%8B%A4-%ED%94%BC%ED%8A%B8-%EB%8B%88%EC%8A%A4-%EC%9E%A5%EB%B9%84-%EC%9E%91%EC%97%85%EC%9D%98-%EB%8B%A4%EC%B1%84%EB%A1%9C%EC%9A%B4-%EC%95%84%EC%9D%B4%EC%86%8C%EB%A9%94%ED%8A%B8%EB%A6%AD-illlustration%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=612x612&w=0&k=20&c=jtVDPl1k1V_MmjKXhzhjukp_9NUoQv6Bnq6u3HC7qO0=' },
    { id: 3, 
      title: '스쿼트',
      url: 'https://previews.123rf.com/images/lioputra/lioputra2208/lioputra220800166/190179008-%EB%B0%94%EB%B2%A8-%EC%9A%B4%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%8A%A4%EC%BF%BC%ED%8A%B8%EB%A5%BC-%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90.jpg' },
    { id: 4, 
      title: '데드리프트',
      text:"전신운동",
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQovZIy5d6R8dwy2Jz2_84YBAYqjmi5cG4A&s'},
    { id: 5, 
        title: '풀업',
        text:"등운동",
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUTGqCVEobbY4wIxKX7GsHyaAo6RfjxWuAQ&s'},
    { id: 6, 
        title: '덤벨프레스',
        text:"가슴운동",
        url: 'https://previews.123rf.com/images/parkheta/parkheta2103/parkheta210300121/166104599-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8D%A4%EB%B2%A8-%EC%88%84%EB%8D%94-%ED%94%84%EB%A0%88%EC%8A%A4-%EC%9A%B4%EB%8F%99-%EC%9A%B4%EB%8F%99-%EB%B2%A1%ED%84%B0-%EC%82%BD%ED%99%94.jpg'},
    { id: 7, 
        title: '런지',
        text:"하체운동",
        url: 'https://previews.123rf.com/images/lioputra/lioputra2206/lioputra220600161/187713645-%EB%8D%A4%EB%B2%A8-%EC%9B%8C%ED%82%B9-%EB%9F%B0%EC%A7%80-%EC%9A%B4%EB%8F%99%EC%9D%84-%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90.jpg'},
    { id: 8, 
        title: '바벨로우',
        text:"등운동",
        url: 'https://www.shutterstock.com/image-vector/man-doing-bent-over-barbell-600nw-1831637863.jpg'},
];
const SportDetail = () => {
    const dispatch=useDispatch();
    const { id } = useParams();
    const photo = photos.find(p => p.id === parseInt(id));

    if (!photo) {
        return <div>Photo not found</div>;
    }
    return (
      <div>
            <h1>{photo.title}</h1>
            <div className='product-page'>
            <img src={photo.url} alt={photo.title} className='photo'/>
            <span>{photo.text}</span>
        </div>
      </div>
    );
};
export default SportDetail;