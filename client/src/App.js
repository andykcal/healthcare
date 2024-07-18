import { useCallback, useState } from "react";
import{
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from "./pages/home/home";
import MyPage from "./pages/mypage/MyPage";
import Register from "./pages/register/Register";
import Bmi from "./pages/bmi/Bmi";
import Shop from "./pages/shop/Shop";
import ShopDetail from "./pages/shop/ShopDetail";
import Header from "./components/header/Header";
import Sport from "./pages/sport/sport";
import { Provider } from "react-redux";
import store from "./pages/shop/Store";
import SportDetail from "./pages/sport/SportDetail";
import SportProduct from "./pages/sport/SportProduct";
import SportProductDetail from "./pages/sport/SportProductDetail";
import Cart from "./pages/cart/Detail";
import CheckBox from "./pages/register/CheckBox";
import ProductPage from "./pages/shop/Prodcut";
function App() {
  return (

    <BrowserRouter>
    <Provider store={store}>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/bmi" element={<Bmi/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/:id" element={<ShopDetail/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/sport" element={<Sport/>}/>
      <Route path="/sport/:id" element={<SportDetail/>}/>
      <Route path="/sportproduct" element={<SportProduct/>}/>
      <Route path="/sportproduct/:id" element={<SportProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkbox" element={<CheckBox/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/shuffle" element={<shuffle/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
