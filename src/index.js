import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import * as math from 'mathjs';
import Screen from './components/screen';
import Button from './components/buttons';
import Clear from './components/clear';

const Calculator = () => {
  
  const [result, setResult] = useState("");
  const [exp, setExp] = useState("");
  
  const addToExpression = (value) => {
    setExp(
      exp =>  exp + value
    );
  }

  const calculate = () => {
    setResult(
      math.evaluate(exp)
    );
  }

  const handleClear = () => {
    setResult("");
    setExp("");
  }

  return (
    <div className="calculator">
      <Screen exp={exp} result={result} />

      <div className="button-div">
        <Button value={"7"} handleClick={addToExpression} />
        <Button value={"8"} handleClick={addToExpression} />
        <Button value={"9"} handleClick={addToExpression} />
        <Button color="#F4A23D" value={"/"} handleClick={addToExpression} />

        <Button value={"4"} handleClick={addToExpression} />
        <Button value={"5"} handleClick={addToExpression} />
        <Button value={"6"} handleClick={addToExpression} />
        <Button color="#F4A23D" value={"*"} handleClick={addToExpression} />

        <Button value={"1"} handleClick={addToExpression} />
        <Button value={"2"} handleClick={addToExpression} />
        <Button value={"3"} handleClick={addToExpression} />
        <Button color="#F4A23D" value={"+"} handleClick={addToExpression} />

        <Button value={"0"} handleClick={addToExpression} />
        <Button value={"."} handleClick={addToExpression} />
        <Button value={"="} handleClick={calculate}/>
        <Button color="#F4A23D" value={"-"} handleClick={addToExpression} />
      </div>
      
      <Clear handleClear={handleClear}/>
    </div>
  );
}



ReactDOM.render(<Calculator />, document.getElementById('root'));