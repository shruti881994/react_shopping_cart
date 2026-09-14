import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirm from './pages/OrderConfirm';
import { CartProvider } from './Context/CartContext';
 import { ToastContainer, toast, Bounce } from 'react-toastify';
function App() {
  return (
    <>
    <CartProvider>
      <ToastContainer
position="top-right"
autoClose={15000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    <div className="min-h-screen bg-gray-950 font-sans">
      <Navbar /> 
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/orderconfirm" element={<OrderConfirm/>}/>
    </Routes>
      
    <Footer/>
     </div>
    </CartProvider>
    
    </>

   
  );
}

export default App;
