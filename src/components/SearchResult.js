import React from 'react'
import './SearchResult.css'
import {useNavigate} from 'react-router-dom'

const SearchResultsList = ({results,hideResults}) => {
 const navigate=useNavigate();

 const handleClick=(selectedMovie)=>{
 
 console.log(selectedMovie.id)
 navigate(`/movie/${selectedMovie.id}` ); //{ state: { selectedMovie } }
 hideResults() 
 
 };

 return (
 <div className="results-list">
 {
 results.map((result,id)=>{
 console.log(result)
 return <div key={id} onClick={()=>handleClick(result)} className='searchResult'>{result?.title || result?.name || result?.title}</div>
 })
 }
 
 </div>
 )
}

export default SearchResultsList