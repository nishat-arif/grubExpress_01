import { useState } from "react";


export const Search =(props) => {

    const [searchText, setSearchText]=useState([])

    const {onSearchTextSend} = props;

    const handleSearchClick =()=>{
        onSearchTextSend(searchText);
    }


    return  (
        <div className="search-container">

            <input className="search-input" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>

            <button type="button" className="search-btn" onClick={handleSearchClick}>Search</button>
        </div>
        )
}