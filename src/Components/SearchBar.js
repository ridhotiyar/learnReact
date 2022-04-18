// import React from "react";
// import "./App.css";

// function App() {
//     return <div className="App"></div>;
// }

// export default App;

// import React, { useState } from "react";
import React from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            {/* <div className="dataResult"></div> */}
        </div>
    )
}

export default SearchBar