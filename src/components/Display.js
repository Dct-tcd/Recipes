import React, { useState,useEffect } from 'react'
import Card from './Card';


function Display() {
const [randomdata, setrandomdata] = useState();

const [query, setquery] = useState("banana");
const [search, setsearch] = useState('')

const apiGet = () => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=0efaa61a&app_key=425656359e4438fbb328ed558a95e18d&imageSize=REGULAR&random=true`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.hits);
        setrandomdata(res.hits);
   });
  };
  const updateSearch = e => {
    setsearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();

    setquery(search);
    setsearch("");
  }

  useEffect(() => {
   apiGet(); 
  }, [getSearch]);
  
    return (
    <>
    <div className='search-form' >
      <input  className='search-bar' value={search}  onChange={updateSearch} type="text"  />
      <button className='search-button' onClick={getSearch}>Search</button>
    </div>
    <div className='recipes'>
      { 
      randomdata!=null && randomdata.map((ele) => (
              
   <Card key={ele.recipe.url} url = {ele.recipe.image} name={ele.recipe.label} ing={ele.recipe.ingredientLines} />

            ))
      
      }
      </div>
    </>
  )
}

export default Display
