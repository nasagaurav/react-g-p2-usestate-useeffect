import React from 'react';
import './style.css';

export default function App() {
  const p1 = () => {
    document.title = "munnabhai mbbs"
  }
  const p2 = () => {
    document.title = "bhag bhag dk boss"
  }
  const p3 = () => {
    document.title = "kahani ghar ghar ki"
  }
  const p4 = () => {
    document.title = "yo yo no no"
  }
  const p5 = () => {
    document.title = "xxx dekh"
  }
  const p6 = () => {
    document.title = "mirzapur"
  }

  return (
    <div>
      <p>
        here we are changing the title on click of the button , text or value is
        predefined or provided(to button) while defining the function.
      </p>
      <button onclick={p1}>click to change title1</button>
      <button onclick={p2}>click to change title2</button>
      <button onclick={p3}>click to change title3</button>
      <button onclick={p4}>click to change title4</button>
      <button onclick={p5}>click to change title5</button>
      <button onclick={p6}>click to change title6</button>
    </div>
  );
}
