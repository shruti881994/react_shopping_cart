import {Link} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Context/CartContext';

function Navbar(){
    const {cartCount} = useCart()
    return(
        <>
        <header className="z-10 sticky top-0 bg-gray-950/95 
        backdrop:blur-md text-white shadow-2xl 
        shadow-gray-950/70 border-b border-orange-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-start">
            <Link to="/">
            <div className="flex items-center space-x-3 cursor-pointer">
                <FontAwesomeIcon icon={faHouse} className="text-xl text-orange-500 drop-shadow-lg w-8 h-8"/>
                <h1 className="text-3xl font-extrabold tracking-widest">Shopping<span className="text-orange-500">Store</span></h1>
                </div>
                </Link>
                <nav className="flex items-center space-x-6">
                    <Link to="/cart" className="relative bg-orange-500/10 rounded-xl
                     hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer p-2">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-orange-400 drop-shadow-sm w-6 "/>
                        {
                            cartCount > 0 && (<span className='absolute top-0 right-0 inline-flex items-center justify-center p-x-2 p-y-1 text-xs font-bold 
                                leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-[24px] h-[20px]'>{cartCount}</span>)
                        }                     
                     </Link>
                
                </nav>
        </div>
        </header>      
        </>
    )
}
export default Navbar;