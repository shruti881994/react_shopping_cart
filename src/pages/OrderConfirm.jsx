import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
const OrderConfirm = ({deliverydetails})=>{
    console.log(deliverydetails)
    return(
        <>
        <div className="container mx-auto md:px-8 pt-12">
            <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl 
             text-white max-w-2xl mx-auto text-center mt-12 border border-green-700">
                <FontAwesomeIcon icon={faCheckCircle} className="w-20 h-20 text-green-500 
                mx-auto mb-6 drop-shadow-lg"/>
                <h1 className="text-4xl font-extrabold mb-4 text-white">Order Confirmed</h1>
                <p className="text-lg text-gray-300 mb-6">Your transcation is complete. A confirmation email has been sent to your account</p>
                {deliverydetails && (
                <div className="bg-green-600/30 border border-green-700
                font-mono text-left inline-block text-green-300 text-sm rounded-2xl mt-10 p-10 mx-auto">
                    <p className="font-semibold text-lg mb-1">
                        {deliverydetails.name}<br></br>
                        {deliverydetails.address}<br></br>
                        {deliverydetails.city}<br></br>
                        {deliverydetails.zip}<br></br>
                    </p>
                </div>
                
                )}
<Link to='/' className="my-14 py-3 w-2/4 m-auto bg-orange-600 font-extrabold text-xl
                 text-white rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
                hover:bg-orange-700 transition duration-300 flex items-center justify-center 
                space-x-2 transform hover:ring-4 hover:ring-yellow-600/50 uppercase tracking-wider">
                        Continue Shopping</Link>
            </div>
            
        </div>
        </>
    )
}
export default OrderConfirm;