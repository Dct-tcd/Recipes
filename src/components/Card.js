import React from "react";

function Card(props) {
  return (
    <div className="recip">
      <div className="cardm" 
      style={{fontFamily: "'Lobster', cursive",  }}
    >
        <img
          className="cardimgtop"
          src={props.url}
          alt="Card image"
          style={{
            borderRadius: "10px",
            width: "300px",
        }}
        />
        <div className="card-imgoverlay">
          <h4 className="cardtitle">{props.name}</h4>
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
