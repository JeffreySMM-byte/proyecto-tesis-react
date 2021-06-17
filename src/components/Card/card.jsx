import React from "react";



const Card =  (props)  =>  {

  return  (
    <div className="card bg-primary mb-3">
    <img src={props.Image} alt="" width="65" height="65"/>
        <div className="card-body">
          <h4 className="card-title">{props.Title}</h4>
          <p className="card-text text-secondary">{props.BodyText ? props.BodyText : "No text for body in props"}</p>
        </div>
    </div>  );
};

export default Card;
