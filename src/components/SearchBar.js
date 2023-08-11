import React, { useState } from "react";
import SearchBox from "./Search";
import SearchResultsList from "./SearchResult";


const SearchBar = () => {
 const [results, setResults] = useState([]);
 const [showResults, setShowResults] = useState(false);
 const [input, setInput] = useState("");

 const handleResults = (data) => {
 setResults(data);
 setShowResults(true);
 };

 const hideResults = () => {
 setShowResults(false);
 setInput("");
 };

 return (
 <div>
 <SearchBox
 fetchUrl={'https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US'}
 onResults={handleResults}
 input={input}
 setInput={setInput}
 />
 {showResults && (
 <SearchResultsList results={results} hideResults={hideResults} />
 )}
 </div>
 );
};

export default SearchBar;