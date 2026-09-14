import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from '../Data/Product';
 import {toast, Bounce} from 'react-toastify';
const CartContext = createContext();


export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const products = initialProducts;

    // add to cart logic
    const addCart = (product)=>{
        toast.success('Item Added to Cart', {
position: "top-right",
autoClose: 15000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
        setCart((prevCart)=>{
            const existingItem = prevCart.find(item=> item.id === product.id);
            if(existingItem){
                return prevCart.map(item=> item.id === product.id ? {...item, quantity:item.quantity+1}
                    : item
                )
            }
            else{
                return [...prevCart, {...product, quantity:1}]
            }
        })

    }

    // remove item from cart
    const removeItem = (productID, removeAll = false)=>{
        toast.error('Item Removed from Cart', {
position: "top-right",
autoClose: 15000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
        setCart((prevCart)=>{
            const existingItem = prevCart.find(item=> item.id === productID);
            if(!existingItem){
                return prevCart;
            }
            if(removeAll || existingItem.quantity === 1){
                return prevCart.filter(item => item.id !== productID)
            }
            else{
               return prevCart.map(item => item.id === productID ? {...item, quantity: item.quantity-1}
                : item

               )
            }
        })

    }

    // clearing cart logic

    const clearCart = ()=>{
        setCart([]);
    }

    const cartCount = useMemo(
        ()=>cart.reduce((total,item)=>total + item.quantity, 0),[cart])

    // price total
    const cartTotal = useMemo(
    ()=>cart.reduce((total, item)=>total + item.price * item.quantity, 0),[cart]
    )

    // console.log('my cart:', cart)
    
    return(
        <>
        <CartContext.Provider value={{products, cart, addCart, clearCart, cartCount, cartTotal,removeItem }}>
            {children}
            </CartContext.Provider>
        </>
    )
}
// creating custom hook for usecart
export const useCart = ()=>{ 
return useContext(CartContext);
}

