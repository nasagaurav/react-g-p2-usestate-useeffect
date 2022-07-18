import React from 'react';
import './style.css';

export default function App() {
  const [topic, settopic] = React.useState('html');

  const [a, seta] = React.useState([]);

  const handleChange = (e) => {
    settopic(e.target.value);
  };

  const addTopic = () => {seta([...a,topic])
  };

  return (
    <div>
      <input value="topic" onChange={handleChange} />
      <button>add topic</button>
      <ol>
        <li>topic name is </li>
        {a.map((item) => (
          <li>topic name is </li>
        ))}
      </ol>
    </div>
  );
}
