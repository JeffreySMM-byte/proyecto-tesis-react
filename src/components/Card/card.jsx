import React, { useEffect } from "react";
import ProgressBar from "../progressbar";
import Counter from "../counter";



const Card =  (props)  =>  {
  
  useEffect(() => {
    console.log(props?.renderProgressBar?.Title)
  });

  return (
    <div className="card bg-primary mb-3">
      <img src={props.Image} alt="" width="65" height="65" />
      <div className="card-body">
        <h4 className="card-title">{props.Title}</h4>
        <p className="card-text text-secondary">
          {props.BodyText ? props.BodyText : "No text for body in props"}
        </p>
        {props?.renderProgressBar?.Render && <ProgressBar value = {props?.renderProgressBar?.Batterylvl} max={100} />}
        {props?.renderCounter && <Counter/>}
        
      </div>
    </div>
  );
};

export default Card;
//{props.renderProgressBar.Render && <ProgressBar value = {props.renderProgressBar.Batterylvl} max={100} />}