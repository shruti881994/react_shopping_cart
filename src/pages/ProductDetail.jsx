import { Link, useParams } from "react-router";
import { initialProducts } from "../Data/Product";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faGreaterThan, faIndianRupeeSign, faTag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronCircleLeft";
import { useCart } from "../Context/CartContext";
const ProductDetail = ()=>{
    const {addCart} = useCart();
  const { id } = useParams();
   const[product, setProduct] = useState();

   useEffect(()=>{
    // setProduct(initialProducts.find((data) => data.id === id))
    setProduct(initialProducts.find((data) => data.id === Number(id)))
   },[id])

   console.log('my product:', product)

   if(!product){
    return <div className="text-center py-8 text-red-500">Product not found</div>
   }

    return(
        <>
        <div className="container mx-auto py-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl
         shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
            <Link to="/" className="cursor-pointer flex items-center text-gray-400 
            hover:text-orange-400 transition duration-300 mb-12 font-semibold text-lg"> 
            <FontAwesomeIcon icon={faChevronCircleLeft} className="w-3 h-3 mr-1"/>
             Back to All Prodcuts
             </Link>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                <div className="w-full">
                    <img src={product.image} alt={product.name} className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"/>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold mb-4 text-white leading-tight tracking-tighter">
                            {product.name}
                            </h1>
                            <p className="text-3xl font-extrabold text-orange-400 mb-4">
                        <FontAwesomeIcon icon={faIndianRupeeSign}/>
                        {product.price.toFixed(2)}
                        </p>
                    <h2 className="text-xl font-bold text-gray-200 mb-2 pb-2 flex items-center border-b border-orange-900/50">
                        <FontAwesomeIcon icon={faTag} className="mr-2"/> Product Overview
                    </h2>
                    <p className="leading-relaxed text-gray-500 text-lg mb-3">{product.description}</p>
                    <ul className="space-y-3 text-gray-300 bg-gray-800 p-4 rounded-xl border border-gray-700">
                        <li className="flex items-center space-x-3 text-lg"> High Quality </li>
                        <li className="flex items-center space-x-3 text-lg"> 1 - year warrnty </li>
                        <li className="flex items-center space-x-3 text-lg"> Shipping </li>
                    </ul>
                    
                    
                    </div>
                    <div className="pt-8">
                        <button onClick={()=>{addCart(product)}}
                        className="mx-auto py-3 bg-orange-600 w-full font-bold
                 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
                hover:bg-orange-700 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-3"/> 
                        Add to Cart
                    </button>
                    <Link to="/">
                    <button className="my-6 mx-auto py-3 border-2 border-orange-600 w-full font-bold
                 text-orange rounded-full shadow-lg cursor-pointer
                hover:bg-orange-900/50 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                        
                        Keep Shopping
                    </button>
                    </Link>
                    </div>
                    

                </div>
             </div>
        </div>
        </>
    )
}

export default ProductDetail;