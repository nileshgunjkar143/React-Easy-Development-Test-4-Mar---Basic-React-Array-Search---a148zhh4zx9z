import React from 'react'
import { useState } from 'react';

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
    const  [searchValue,setSearchValue] = useState("")
  console.log(searchValue.length)
  return (
    <div id="main">
    <h2>Search</h2>
      <input id="search-input" type='text' name='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    <h2>Result</h2>
    <ul>
      {searchValue.length!==0?searchArray.filter(name => name.match(new RegExp(searchValue, 'i')))
      .map(name => {
        return <li key={name}>{name}</li>
      }):null
      }
    </ul>
    </div>
  )
}


export default App;
