import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import Screen from './components/screen';
import Button from './components/buttons';
import Clear from './components/clear';

const Calculator = () => {
  
  const [result, setResult] = useState("Result");
  const [exp, setExp] = useState("Text");
  
  /*const handleClick = () => {
    setExp(
        (exp) => [...exp, value + ""]
    );
  }*/

  const handleClear = () => {
    setResult("");
    setExp("");
  }

  return (
    <div className="calculator">
      <Screen exp={exp} result={result} />

      <div className="button-div">
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button color="#F4A23D" value={"/"} />

        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
        <Button color="#F4A23D" value={"*"} />

        <Button value={1} />
        <Button value={2} />
        <Button value={3} />
        <Button color="#F4A23D" value={"+"} />

        <Button value={0} />
        <Button value={"."} />
        <Button value={"="} />
        <Button color="#F4A23D" value={"-"} />
      </div>
      
      <Clear handleClear={handleClear}/>
    </div>
  );
}



ReactDOM.render(<Calculator />, document.getElementById('root'));