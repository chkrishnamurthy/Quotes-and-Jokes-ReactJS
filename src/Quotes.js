import React,{useState,useEffect} from 'react';
import './App.css';


function Quotes(){
const [quotes,setquotes] = useState("");
const [color,setColor] = useState("white");

let colors = ["#FF0000","#FF00FF","#800080","#00008B","#008000"];

useEffect(()=>{
    GetQuote();
  },[])
  
const GetQuote = ()=>{
  fetch('https://type.fit/api/quotes')
  .then((res)=>res.json())
  .then((data)=>{
    setquotes(data[Math.ceil((Math.random())*data.length-1)]);
    setColor(colors[Math.ceil((Math.random())*colors.length-1)])
    console.log(color);
  })

  
}

    return (
        <div className='quote'>
                      <div className='headline'>Quotes</div>
      <div className="joke_line">
    <p style={{color:`${color}`}} >{quotes.text}</p>
    <p className='author_text'>{quotes.author}</p>
    </div>
    <div className='btnDiv'>
    <a className='btn'
     href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
     target="_blank">Tweet</a>
         <button className='btn' onClick={GetQuote}>Get Quote</button>

    </div>
    
      </div>
    )
}


export default Quotes;