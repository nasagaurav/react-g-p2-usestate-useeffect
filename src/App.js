import React from 'react';
import './style.css';

export default function App() {
     const [x,setx]= React.useState(0);
  const p1= ()=>{ setx(x+1);};
  const p2=()=>{setx(x-1);};

  Const p3=()=>{setx(0);};
 

  return (

    <div>
      <h1>counter</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
    
  );
}
