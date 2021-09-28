import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup'
import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const apiurl="http://www.omdbapi.com/?apikey=dfe6d885";
  // http://www.omdbapi.com/?apikey=dfe6d885                 http://www.omdbapi.com/?i=tt3896198&apikey=70011729
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search=(e)=>{
  if(e.key==="Enter"){
    axios(apiurl+"&s="+state.s).then(({ data })=>{
      let results=data.Search;

      setState(prevState =>{
        return{ ...prevState,results: results}
      })
    });
  }
  }

  const handleInput=(e)=> {
    let s=e.target.value;
    setState(prevState=>{
      return{...prevState,s:s}
    });
  }
  
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  const [mode, setmode] = useState('light');

  const togglemode= ()=>{
   if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
   }
   else{
     setmode('dark');
     document.body.style.backgroundColor='#1a0343';
   }
  }


  return (
    // <div className={(typeof state.selected.Title !== "undefined") ? 'app nobackground':'app background' }>
    <>    
   
      <Navbar title="Movies DataBase" mode={mode} togglemode={togglemode}/>
     <div className="App">
       <main>
         <Search handleInput={handleInput} search={search}/>
         <Results results={state.results}  openPopup={openPopup}/>
         {(typeof state.selected.Title !== "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
       </main>
     </div>
     
    </>
  //  </div>
  );
}

export default App;
