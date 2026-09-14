import Catergoryfilter from '../components/Categoryfilter';
import Searchfilter from '../components/Searchfilter';
import { useCart } from '../Context/CartContext';
import Productcard from '../components/Productcard';
import { useState } from 'react';

function ProductList() {
 const { products } = useCart();
 const[searchTerm, setSearchTerm] = useState("");
 const[selectedCategory, setSelectedCategory] = useState("All")
const filterProducts = products.filter((product)=>{
    const matchsSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    || product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchsSearch && matchesCategory;
})
    return (
        <>
        <div className="container mx-auto px-4 md:px-8 pt-8">
            <Searchfilter searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Catergoryfilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

            <h2 className='text-2xl font-extrabold mx-auto px-1 md:px-0 pt-4'>Featured Products ({products.length} Items)</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>
            
            {
                filterProducts.map((product, index)=>(

                    <Productcard key={index} product={product}/>
                ))
            }
            </div>    
        </div>
        
        
        </>
    )
}

export default ProductList;