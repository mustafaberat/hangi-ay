"use client";

import React, { useState } from "react";
import { getMonthByName, getMonthByNumber } from "./utils";
import "./global.css";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputClass, setInputClass] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const number = parseInt(value);
    let monthResult = "";

    if (!isNaN(number)) {
      monthResult = getMonthByNumber(number);
    } else {
      monthResult = getMonthByName(value);
    }

    if (monthResult) {
      setInputClass("");
    } else {
      setInputClass("invalid");
    }

    setResult(monthResult);
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="title">Hangi Ay</div>
        <div className="month-input">
          <input
            type="text"
            placeholder="7 / June / Kasım"
            value={inputValue}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        {result && (
          <div className="result-container">
            <p className="result-text">{result}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <p className="footer-text">
          Peek at my codes on{" "}
          <a
            href="https://github.com/mustafaberat/hangi-ay"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
