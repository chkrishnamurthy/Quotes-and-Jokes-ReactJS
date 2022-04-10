import './App.css';
import React,{useState,useEffect}from 'react';

import Quotes from './Quotes';
import Jokes from './Jokes'
import profile from './assets/profile.jpg'


function App() {
  const [concept,setConcept] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

const conceptChnageHandler = ()=>{
  setConcept(!concept);
}

const themeChangeHandler = ()=>{
  setDarkMode(!darkMode);

}



  return (
  <div  className={darkMode?"dark":"light"} > 
  
    <div className="flex-end">
    <button type="button" className="btn" onClick={conceptChnageHandler}>{(concept)?"Jokes":"Quotes"}</button>

          <label className="switch">
            <input type="checkbox" onChange={themeChangeHandler} />
            <span className="slider round"> </span>
          </label>
          <div className='test'>
            <img src={profile} />
         
          </div>
        </div>
      <div>
  
      </div>
{(concept)?<Quotes />:<Jokes />}
 </div>
  );
}

export default App;
