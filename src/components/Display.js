import React, { useState,useEffect } from 'react'
import Card from './Card';


function Display() {
const [randomdata, setrandomdata] = useState();

const apiGet = () => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=0efaa61a&app_key=425656359e4438fbb328ed558a95e18d&imageSize=REGULAR&random=true`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.hits);
        setrandomdata(res.hits);
   });
  };

  useEffect(() => {
   apiGet(); 
  }, []);
  
    return (
    <div>


      { 
      randomdata!=null && randomdata.map((ele) => (
            <div style={{borderRadius: "10px",
            boxShadow: "0px 5px 20px rgb(63, 60, 60)",
            margin: "10px",
            display: "inline-block",
            flexDirection: "row",
            justifyContent: "space-between",
            // flexWrap: "wrap",
            alignItems: "center",
            minWidth: "40%",}}>
              
   <Card key={ele.recipe.url} url = {ele.recipe.images.SMALL.url} name={ele.recipe.label} ing={ele.recipe.ingredientLines} />

            </div>
      ))
      
      }
    </div>
  )
}

export default Display
