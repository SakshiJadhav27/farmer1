import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home/home';
import Login from './Login/login';
import Farmer from './Farmer/farmer';
import FarmerLogin from './Farmer/FLogin/farmerLogin';
import FarmerRegister from "./Farmer/FRegistration/farmerRegistration";
import Wholesaler from "./Wholesaler/wholesaler";
import WholesalerLogin from "./Wholesaler/WLogin/wholesalerLogin";
import WholesalerRegistetr from "./Wholesaler/WRegisteration/wholesalerRegister";
import FarmerHome from "./Farmer/FHome/farmerHome";
import WholesalerHome from "./Wholesaler/WHome/wholesalerHome";
import ContactUsPage from "./Contact/contact";
import AddProduct from "./Farmer/AddItem/AddProduct";
//import AddToCart from "./Wholesaler/AddToCart/MainShop/addtocart";
import Weather from "./Farmer/Weather/weather";
import AboutUs from "./Footer/about";
import Cart from "./Wholesaler/Cart/Cart"
import Checkout from "./Wholesaler/Cart/Checkout";
import MyCart from "./Wholesaler/Cart/Mycart";
import GovernmentSchemes from "./Farmer/GovernmentScheme/Schemes";
import Admin from "./Admin/admin"
import AdminLogin from "./Admin/Admin_login"
//import AdminRegister from "./Admin/Admin_register"
import FarmerDetails from "./Admin/FarmerDetails/farmerD";
import WholesalerDetails from "./Admin/WholesalerDetails/wholesalerD";
import NotFoundPage  from "./PageNotFound/pagenotfound"
import AdminHome from "./Admin/admin_home";


export const Router =() =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/wholesaler' element={<Wholesaler/>}/>
            <Route path='/wholesalerLogin' element={<WholesalerLogin/>}/>
            <Route path='/wholesalerRegister' element={<WholesalerRegistetr/>}/>
            <Route path='/farmerRegister' element={<FarmerRegister/>}/>
            <Route path='/farmer' element={<Farmer/>}/>
            <Route path='/farmerLogin' element={<FarmerLogin/>}/>
            <Route path='/farmerHome' element={<FarmerHome/>}/>
            <Route path='/wholesalerHome' element={<WholesalerHome/>}/>
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/contact' element={<ContactUsPage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/farmerd' element={<FarmerDetails/>}/>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path='/adminHome' element={<AdminHome/>}/>
            <Route path='/wholesalerd' element={<WholesalerDetails/>}/>
            <Route path="*" element={<NotFoundPage/>} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/addtocart' element={<MyCart/>}/>
            <Route path='/governScheme' element={<GovernmentSchemes/>}/>

        </Routes>  
        </BrowserRouter>
    )
}