import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faMap, faMapLocation, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import OrderConfirm from "./OrderConfirm";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const Checkout = ()=>{
    const{cart, cartTotal, clearCart} = useCart();
    const[deliverydetails, setDeliverydetails] = useState({
        name: "",
        address: "",
        city:"",
        zip:""
});

// for oreder confirmation state
const[isConfirmed, setIsConfirmed] = useState(false)


// submit form
const handleChange = (event)=>{
    const{name, value} = event.target;
    setDeliverydetails(prev=>({...prev, [name]:value}))
}
const handleSubmit= (event)=>{
    event.preventDefault();
    clearCart();
    setIsConfirmed(true);
}
console.log(deliverydetails);
if(isConfirmed) return <OrderConfirm deliverydetails={deliverydetails} />

    return(
        <>
        <div className="container mx-auto px-4 md:px-8 pt-8">
            <h2 className="text-5xl tracking-light font-extrabold text-white mb-10">Shipping Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
                    <h3 className="text-3xl mb-6 flex items-ceter text-orange-400 border-b border-gray-700 pb-2 space-x-3">
                        <FontAwesomeIcon icon={faMap} /> <span className="font-bold">Shipping Information</span> </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {
                        Object.keys(deliverydetails).map(key=>
                        <div key={key}>
                            <label htmlFor={key} className="block text-sm font-semibold text-gray-300 
                            capitalize mb-1">
                                {key === "zip" ? "Pin code" : key}
                            </label>
                            <input type={key === "zip" ? "number" : "text"} 
                            id={key} name={key} value={deliverydetails[key]} required
                            className="block mt-3 w-full px-5 py-3 border
                             border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder:bg-gray-500"
                            onChange={handleChange}
                            />

                        </div>)
                    }
                    <button type="submit"
                        className="my-14 mx-auto py-3 bg-orange-600 w-full font-extrabold text-xl
                 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
                hover:bg-orange-700 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                        
                        Pay ({cartTotal.toFixed()})
                    </button>
                </form>
                </div>

                {/* order summary in checkout*/}
                 <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-1/4 sticky top-20 h-fit border-gray-800">
                                <h3 className="text-3xl text-white font-extrabold mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faShoppingBag}/> Order Summary
                                </h3>
                                <div className="space-y-4 text-gray-400">
                                        <span>
                                            {
                                                cart.map(item=><div className="flex justify-between text-base border-b
                                                     border-gray-700 pb-2" key={item.id}>
                                                        <span className="text-gray-300 truncate">
                                                            {item.name}
                                                            
                                                        </span>
                                                        <span className="text-orange-300 font-medium"> {(item.price*item.quantity).toFixed(2)}</span>
                                   
                                                     </div>)
                                            }
                                             </span>
                                            
                                             <div className="flex justify-between text-xl">
                        <span>SubTotal: </span>
                            <span className="text-white font-semibold"><FontAwesomeIcon icon={faIndianRupeeSign}/> {cartTotal.toFixed(2)}</span>
                    </div>
                                     <div className="flex justify-between text-xl">
                                        <span>Shipping Express: </span>
                                            <span className="text-green-400 font-semibold">Free</span>
                                    </div>
                                    <div className="flex justify-between text-xl pt-6 border-t border-gray-700 ">
                                        <span className="text-2xl font-extrabold text-white"> Total Due: </span>
                                            <span className="text-3xl font-extrabold text-orange-400">{cartTotal.toFixed()}</span>
                                    </div>
                                    
                                    
                                </div>
                                </div>

            </div>
        </div>
        </>
    )
    
}
export default Checkout;