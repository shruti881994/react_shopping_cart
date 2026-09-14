import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {initialProducts} from "../Data/Product"
import { faTag } from "@fortawesome/free-solid-svg-icons";
const availableCategories = [
    "All", ...new Set(initialProducts.map((product)=>product.category))

]
const Catergoryfilter =({selectedCategory, setSelectedCategory})=>{

    return(
        <>
        <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">
            <FontAwesomeIcon icon={faTag} className="text-orange-500 w-5 h-5 mt-2 mr-2 hidden sm:block"/>
        {
           availableCategories.map((categories, index)=>(
            <button key={index} onClick={()=>{setSelectedCategory(categories)}}
            className={`px-5 py-2 text-sm font-bold rounded-full transition 
            duration-200 shadow-md ${selectedCategory ===  categories ? 'bg-orange-600 text-white shadow-orange-800/50' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700'} `}>
                {categories}
            </button>
           )) 
        }
        </div>
        </>
    )
}

export default Catergoryfilter;