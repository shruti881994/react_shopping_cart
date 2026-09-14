import { faIndianRupee, faRupee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useCart } from "../Context/CartContext";
const Productcard = ({product})=>{
    const { addCart } = useCart();
    return(
        <>
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col 
        h-full transition duration-500 transform border border-gray-800 group hover:scale-[1.03]
         hover:shadow-orange-900 mt-9">
            <Link to={'/product/'+product.id} className="cursor-pointer relative overflow-hidden">
            <img src={product.image} alt="{Product.name}" className="w-full h-56 object-cover 
            transition duration-500 object-center group-hover:scale-110 group-hover:opacity-90"/>
            <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 
            text-xl rounded-tr-xl font-extabold shadow-lg">
                <FontAwesomeIcon icon={faIndianRupee}/>{product.price.toFixed(2)}
            </div>
            </Link>
            <div className="p-5 flex flex-col grow">
                <Link to={'/product/'+product.id}>
                <h3 className="text-xl cursor-pointer font-extrabold
                 hover:text-orange-400 transition duration-200 line-clamp-1">
                    {product.name}
                </h3>
                
                </Link>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {product.description}
                </p>
                <div className="text-gray-500 text-xs mb-4 flex items-center">
                    <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold">
                        {product.category}
                    </span>
                </div>
                <button onClick={()=>{addCart(product)}} className="mx-auto py-3 bg-orange-600 w-full font-bold
                 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
                hover:bg-orange-700 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                    <FontAwesomeIcon icon={faShoppingCart}/> 
                    Add to Cart
                </button>

            </div>

        </div>
        </>
    )
}

export default Productcard;