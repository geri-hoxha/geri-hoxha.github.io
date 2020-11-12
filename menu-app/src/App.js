import React, { Component } from 'react';
import './App.css';
import Item from './Item'


class App extends Component{
  state={
    list:[ 
      
      {
       category: 'All'
      },
      {
      category: 'Iphone',
      item:[
        {
          name:'Iphone X',
          price:700,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    },
    {
      category: 'Samsung',
      item:[
        {
          name:'Samsung S20',
          price:800,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    },
    {
      category: 'One Plus',
      item:[
        {
          name:'One Plus 7',
          price:1000,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    }
  ]

  }

  clickHandler=()=>{
    let a=0;
      this.state.list.map(e=>{
        if(a>0){
          console.log(e)
        }
      })
  }

  render(){

  return (
    <div className="App">
      <h1>Cart filter</h1>
    {
    this.state.list.map((e)=>(
    <li onClick={this.clickHandler}  >{e.category}</li>
    ))
    }
   
    </div>
  );
  }
}

export default App;
