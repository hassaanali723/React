import logo from './logo.svg';
import React, {useState,useEffect,useRef} from 'react';
import './App.css';


const App = () => {
  const [quotes, setQuote] = useState(" ");
  const textRef=useRef();
  let colors= ['#96ff9d','#f2a06a','#ff6be6','#555ff2','#ce06c1'];

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
     
      let randomNo = Math.floor(Math.random()*data.length);
      setQuote(data[randomNo]);

    });
  };
   
useEffect(() => {
getQuote();

}, []);

useEffect(() => {
  textRef.current.style.color=
  colors[Math.floor(Math.random()*colors.length)]
  
  }, [quotes]);

return(
<div>

<div className="App">

  <div className="quote"> 
  <h2 className="txt">Quote Generator</h2>
  <p ref={textRef}>{quotes.text}</p>
  <p>Author: {quotes.author}</p>
  <div className="btnContainer">
   <button onClick={getQuote} className="btn">Get Quote</button>
   <a
   href={`https://twitter.com/intent/tweet?text=${quotes.text+"~"+quotes.author}`}
   target="_blank"
   rel="noopener noreferrer"
   className="btn">
     Tweet
   </a>
   
  </div>
  
  </div>

  </div>

  </div>
 
);


};




export default App;
