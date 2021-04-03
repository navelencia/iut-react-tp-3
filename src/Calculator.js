import { useState, useRef } from 'react';
import CalculatorKeys from './CalculatorKeys';
import './Calculator.css';

function Calculator() {
  const [ screenContent, setScreenContent ] = useState('0');
  const [ lastOperation, setLastOperation ] = useState('');
  const currentInput = useRef(0);
  const previousInput = useRef(0);

  function buttonPressed (key) {
    if (typeof key === 'number') {
      currentInput.current = Number(String(currentInput.current) + String(key));
      setScreenContent(String(currentInput.current))
    } else if (key === 'AC') {
      AC();
    } else if (key === '=') {
      Equal()
    } else {
      Operation(key);
    }
  }

  function AC () {
    currentInput.current = 0;
    previousInput.current = 0;
    setScreenContent(String(currentInput.current));
  }

  function Operation (key) {
    previousInput.current = currentInput.current;
    currentInput.current = 0;
    setScreenContent(String(currentInput.current));
    setLastOperation(key)
  }

  function Equal () {
    if (lastOperation === '+') {
      setScreenContent(String(previousInput.current + currentInput.current));
    }
    if (lastOperation === '-') {
      setScreenContent(String(previousInput.current - currentInput.current));
    }
    if (lastOperation === '/') {
      setScreenContent(String(previousInput.current / currentInput.current));
    }
    if (lastOperation === '*') {
      setScreenContent(String(previousInput.current * currentInput.current));
    }

    previousInput.current = 0;
    currentInput.current = 0;
  }

  return (
    <div className="calculator">
      <div className="screen">
        {screenContent}
      </div>
      <CalculatorKeys onButtonPressed={(key) => buttonPressed(key)}/>
    </div>
  );
}

export default Calculator;
