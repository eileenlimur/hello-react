import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { buttonText, resetText } = props;
  return (
    <button onClick={resetText}>
      {buttonText}
    </button>
  )
};

const Application = () => {

  const [name, setName] = useState("");

  const resetText = () => {
    setName("");
  };

  return (
    <main>
      <input placeholder="Type your name" value={name} onChange={(event)=>setName(event.target.value)}/>
      <Button buttonText="Reset" resetText={resetText} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
