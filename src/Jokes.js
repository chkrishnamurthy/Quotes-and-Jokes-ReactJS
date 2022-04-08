import React,{useState,useEffect} from 'react';
import './App.css';


function Jokes(){
const [joke,setJoke] = useState("");
const [color,setColor] = useState("white");

let colors = ["#FF0000","#0000FF","#800080","#FFFF00","#008000","#85C1E9","#2E4053","#1D8348"]

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
    console.log(jokeObj);
    setJoke(jokeObj.joke);
    setColor(colors[Math.ceil((Math.random())*colors.length-1)])
  }


    return (
        <div className='quote'>
            {/* <h4>Jokes</h4> */}
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