import React from "react";

const Search = ({searchfield, searchChange})=>{
    return(
        <div >
            <input 
            type="search" 
            placeholder="Busqueda" 
            id="Busqueda" 
            onChange={searchChange}
            className="pa2 ma2"
            />
        </div>
    )

}
export default Search;