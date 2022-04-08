import './App.css';
import React,{useState,useEffect}from 'react';

import Quotes from './Quotes';
import Jokes from './Jokes'


function App() {
  const [concept,setConcept] = useState(false);
  // const [darkMode,setDlarkMode] = useState(false);

const conceptChnageHandler = ()=>{
  setConcept(!concept);
}



  return (
  <div className="App"> 
    <div className="flex-end">
    <button type="button" className="btn" onClick={conceptChnageHandler}>{(concept)?"Jokes":"Quotes"}</button>

        
{/*  */}
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"> </span>
          </label>
        </div>
      <div>
{/*  */}
    <div>
      <img />
    </div>
        {/* <input type="checkbox" />Theme */}
      </div>
{(concept)?<Quotes />:<Jokes />}
 </div>
  );
}

export default App;
