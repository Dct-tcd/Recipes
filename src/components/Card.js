import React from "react";

function Card(props) {
  return (
    <div className="container " style={{  
    backgroundImage:"url('https://wallpaperaccess.com/full/1155015.jpg')",
    // justifyContent: "space-around",
        verticalAlign: "text-top",
        }}>
            
      <div className="card" style={{
    // backgroundImage:"url('https://wallpaperaccess.com/full/1155015.jpg')",
    fontFamily: "'Lobster', cursive",  }}
    >
        <img
          className="card-img-top"
          src={props.url}
          alt="Card image"
          style={{
            borderRadius: "10px",
            margin:"0px 0px 20px 0px",
        }}
        />
        <div className="card-img-overlay">
          <h4 className="card-title">{props.name}</h4>
        </div>
       {props.ing!=null && props.ing.map((ele)=>{
        // return { 
            return <ul><li>{ele}</li></ul>
            //   }
       })
       }
      </div>
    </div>
  );
}

export default Card;
