import { useState } from "react";


export const Search =(props) => {

    const [searchText, setSearchText]=useState([])

    const {onSearchTextSend} = props;

    const handleSearchClick =()=>{
        onSearchTextSend(searchText);
    }


    return  (
        <div className="m-2">

            <input className="w-48 border border-solid border-black  mr-2" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>

            <button type="button" className="bg-gray-200 px-4 py-1 m-4 rounded-sm" onClick={handleSearchClick}>Search</button>
        </div>
        )
}