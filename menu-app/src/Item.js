import React from 'react';
import './App.css';


const Item=(props)=>{

  
    return (
      <div >
        <img src="#" alt="img" />
    <h4>{props.name}</h4>
    <span>{props.price}</span>
    <p>{props.desc}</p>
     
      </div>
    );
    
  }
  
  export default Item;
  