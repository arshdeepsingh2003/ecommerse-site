
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { LoginSignup } from './pages/LoginSignup';
import { Shop } from './pages/Shop';
import { Product} from './pages/Product';
import { Cart } from './pages/Cart';
import Footer from './components/Footer/Footer';
import banner_mens from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/men' element={<ShopCategory banner={banner_mens} category='men'/>}></Route>
        <Route path='/women' element={<ShopCategory banner={banner_women} category='women'/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kids'/>}></Route>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route> 
        <Route path='/Login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
