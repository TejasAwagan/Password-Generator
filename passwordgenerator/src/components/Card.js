import React, { useCallback, useEffect, useState } from "react";
import "./card.css";

function Card() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0 123456789";
    }
    if (character) {
      str += "+-{@!}-";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);    

  }, [number, character, length]);

  useEffect(()=>{
    passwordGenerator();
  },[number, character, length, passwordGenerator])


  const handleNumber = () =>{
    setNumber(prev => !prev)
  }

  const handleCharacter = () =>{
    setCharacter(prev => !prev)
  }

  return (
    <div className="card-container">
      <h1 className="heading">Password Generator</h1>
      <div className="inputField">
        <input type="text" className="input" value={password} readOnly />
        <button className="copy-btn">Copy</button>
      </div>
      <div className="footer-element">
        <input
          onChange={(e) => setLength(e.target.value)}
          type="range"
          min={8}
          max={60}
        />{" "}
        <b>Length {length}</b>
        <input className="checkbox" type="checkbox" onChange={handleNumber} value={number} />
        <b>Number</b>
        <input className="checkbox" type="checkbox" onChange={handleCharacter} value={character} />
        <b>Character</b>
      </div>
    </div>
  );
}

export default Card;
