import React,{useState,useEffect} from 'react';
import './App.css';
import colors from './colors'

function Jokes(){
const [joke,setJoke] = useState("");
const [color,setColor] = useState("white");

// let colors = ["#FF0000","#FF00FF","#800080","#00008B","#008000"];

useEffect(()=>{
    GetJokes();
  },[])

  const GetJokes = async ()=>{
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
      headers:{
        "Accept":'application/json'
      }
    })
    const jokeObj = await jokeData.json();
    setJoke(jokeObj.joke);
    setColor(colors[Math.ceil((Math.random())*colors.length-1)])
  }


    return (
        <div className='quote'>
            <div className='headline'>Jokes</div>
    <p  style={{color:`${color}`}} className="joke_text">{joke}</p>
    <div className='btnDiv'>
    <a className='btn'
     href={`https://twitter.com/intent/tweet?text=${joke}`}
     target="_blank">Tweet</a>
         <button className='btn' onClick={GetJokes}>Get Joke</button>

    </div>
      </div>
    )
}


export default Jokes;