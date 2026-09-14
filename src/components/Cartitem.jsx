import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../Context/CartContext";
import { faIndianRupee, faXmark } from "@fortawesome/free-solid-svg-icons";
const Cartitem = ({item})=>{
    const {addCart, removeItem} = useCart();
    const increaseQ = ()=> addCart(item);
    const decreaseQ = ()=> removeItem(item.id);
    return(
        <>
        <div className="flex felx-col items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 
        rounded-xl border border-gray-800 shadow-2xl transition duration-300 hover:border-orange-600/50">
            <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"/>
            <div>
                <h3 className="text-xl font-bold text-white line-clamp-1">{item.name}</h3>
                <p className="pt-3 font-extrabold"><FontAwesomeIcon icon={faIndianRupee} />{item.price.toFixed(2)}</p>
            </div>
            
            </div>
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
            <div className="flex items-center border boder-gray-700 rounded-full overflow-hidden shadow-lg">
                <button onClick={decreaseQ} className="p-2 transition duration-200 w-8
                 justify-center text-gray bg-gray-800 hoer:bg-gray-700 items-center">
                   - 
                </button>
                <span className="font-bold text-white px-3 text-base">{item.quantity}</span>
                <button onClick={increaseQ} className="p-2 transition duration-200 w-8
                 justify-center text-gray bg-gray-800 hoer:bg-gray-700 items-center">
                   + 
                </button>
                </div>
                <p className="text-orange-300 text-right font-extrabold hidden md:block">
                    <FontAwesomeIcon icon={faIndianRupee}/>{(item.price*item.quantity).toFixed(2)}
                    </p>
                <button onClick={()=>{removeItem(item.id, true)}}>
                    <FontAwesomeIcon icon={faXmark} className="w-3 h-3 rounded-full p-2 bg-red-700 transition duration-200 hover:bg-red-800/90"/>
                </button>
            </div>
        </div>
        </>
    )
}
export default Cartitem;