import React, { useState } from 'react';

import { RomanNumerals } from './helpers';
import './App.css';

 const App = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const handleRomanNumeralConvert = () => {
    const value = document.querySelector("#number").value;

    setUserInput(value.toUpperCase());
    setResult(
      isNaN(value)
      ? RomanNumerals.fromRoman(value.toUpperCase())
      : RomanNumerals.toRoman(value)
    );
  };

  const handleClear = () => {
    document.querySelector("#number").value = "";
    setResult("");
  };

  return (
    <div className="form">
      <h3>Roman Numeral Converter</h3>
      <h4>Convert numbers to Roman numerals, <br />
        Convert Roman numerals to numbers</h4>
      <input id="number" className="floating__input" type="text"/>
      <div className="button__container">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleRomanNumeralConvert}>Calculate</button>
      </div>
      <div className="answer__section">
        <span>Answer:</span><br /><br />
        { !!result
          ? <span className="answer">{userInput} = {result}</span>
          : <span className="error__text">Enter a valid Roman Numeral or Integer from 1 to 3999</span>
        }
      </div>
    </div>
  );
};

export default App;
