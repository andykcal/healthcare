import Navbar from "../../components/navbar/navbar";
import './home.css'
import { useNavigate } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CategoryIcons from "../../components/Icon/Icons";
const Home = () => {
    const navigate=useNavigate()

return(
<div>
    <Navbar/>
    <CategoryIcons/>
        <img src="https://kr.imboldn.com/wp-content/uploads/2022/07/newbie_guide_fitness_pt1_main.jpg" className="Homeimg"></img>
    <Footer/>
</div>
    )
}
export default Home;