import React from "react";
const ActiveSearch = {};
 const Search = (props) => {

    return (
        <div className="Search">
        <input placeholder="Search..."></input>
        <button onClick={ActiveSearch}>Search</button>
      </div>
    )

}
export default Search;

