import { useCart } from "../Context/CartContext";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Cartitem from '../components/Cartitem';
const Cart = ()=>{
    const{cart, cartTotal, cartCount} = useCart();
   
    return(
        <>
        <div className="container mx-auto px-4 md:px-8 pt-8">
            <div className="flex items-center pb-10 ">
                <Link to="/" className="flex items-center text-gray-400 hover:text-orange-400 transition duration-200 font-semibold text-lg">  
               <FontAwesomeIcon icon={faChevronCircleLeft} className="w-3 h-3 mr-1"/>
                Back to Products
                </Link>
            </div>
            <h2 className="text-white text-4xl font-extrabold mb-10 tracking-tight">Shopping Cart ({cartCount})</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                    {
                        cart.map(item=> <Cartitem key={item.id} item={item}/>)
                    }

                </div>
                <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-1/4 sticky top-20 h-fit border-gray-800">
                <h3 className="text-3xl text-white font-extrabold mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faIndianRupeeSign}/> Order Total
                </h3>
                <div className="space-y-4 text-gray-400">
                    <div className="flex justify-between text-xl">
                        <span>SubTotal: </span>
                            <span className="text-white font-semibold"><FontAwesomeIcon icon={faIndianRupeeSign}/> {cartTotal.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between text-xl">
                        <span>Shipping Express: </span>
                            <span className="text-green-400 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-xl pt-6 border-t border-gray-700 ">
                        <span className="text-2xl font-extrabold text-white">Estimated Total: </span>
                            <span className="text-2xl font-extrabold text-orange-400">{cartTotal.toFixed()}</span>
                    </div>
                    
                     <Link to="/checkout"
                        className="my-14 mx-auto py-3 bg-orange-600 w-full font-extrabold text-xl
                 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
                hover:bg-orange-700 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                        
                        Proceed Securely
                    </Link>
                    <p className="text-xs text-gray-400 text-center tracking-tight">All transcations are secure</p>

                </div>
                </div>
            </div>


        </div>        
        </>
    )
}
export default Cart;