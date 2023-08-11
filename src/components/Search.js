import React from 'react'
import {FaSearch} from "react-icons/fa"
import './Search.css'
const SearchBox = ({fetchUrl, onResults, input, setInput}) => {

 const getData = (value) => {
 fetch(fetchUrl)
 .then((response) => response.json())
 .then((data) =>{
 const movie=data.results.filter((item)=>{
 const actual_name=item?.title || item?.name || item?.original_name
 return value && actual_name && actual_name.toLowerCase().includes(value.toLowerCase()) 
 
 
 });
 onResults(movie)
 } 
 )
 .catch((error) => console.log('Error fetching data:', error));
 }

 const handleChange=(value)=>{
 setInput(value)
 getData(value)
 console.log(value)
 } 

 return (
 <div>
 <div className="input-wrapper"> 
 <FaSearch id="search-icon" />
 <input className='searchbox' value={input} type='search' placeholder='Search Movies' onChange={(e)=>{handleChange(e.target.value)}} />
 </div>
 </div>
 )
}

export default SearchBox