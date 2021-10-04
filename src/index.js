import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useReducer } from 'react';
import * as math from 'mathjs';
import Screen from './components/screen';
import Button from './components/buttons';
import Clear from './components/clear';


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return {exp: state.exp + action.value, result: state.result};
    case 'RESULT':
      return {exp: state.exp, result: math.evaluate(state.exp)};
    case 'CLEAR':
      return {exp: "", result: ""};
    default:
      return state;
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, {exp: "", result: ""});
  
  const addToExpression = (val) => {
    dispatch(
      {type: 'ADD', value: val}
    );
  }

  const calculate = () => {
    dispatch(
      {type: 'RESULT'}
    );
  }

  const handleClear = () => {
    dispatch(
      {type: 'CLEAR'}
    );
  }

  return (
    <div className="calculator">
      <Screen exp={state.exp} result={state.result} />

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