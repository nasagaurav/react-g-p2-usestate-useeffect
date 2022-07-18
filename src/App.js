import React from 'react';
import './style.css';

export default function App() {

     const [x,setx]= React.useState(0);

  const p1= ()=>{setx(x+1);};

  const p2=()=>{setx(x-1);};

  Const p3=()=>{setx(0);};

  const changeTitle=
  ()=>{document.Title=x;};

  const handleChange = (e)=>{

    const inputValue=+e.target.value;

    setx(inputValue)

  };

  React.useEffect(changeTitle,[x]);
 

  return (

    <div>
      <input type="number" onChange={handleChange}/>

      <input type="range" onChange={handleChange} />
      
      <h1>counter{x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
    
  );
}
