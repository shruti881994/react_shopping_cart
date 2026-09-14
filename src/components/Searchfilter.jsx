import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchfilter = ({searchTerm, setSearchTerm})=>{
    return(
        <>
        <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
            <div className="flex items-center border border-gray-700 rounded-xl focus-within:bg-gray-900/50
            overflow-hidden focus-within:ring-4 
            transistion duration-300 bg-gray-800">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 text-xl ml-3 w-5 h-5"/>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                 className="focus-within:bg-gray-900/50 w-full p-2 rounded-lg
                  bg-gray-800 text-white  border-0 focus:outline-none placeholder-gray-500 text-base font-medium  "/>
            </div>

        </div>
        </>
    )
}

export default Searchfilter;