import './buttons.css';

const Button = (props) => {
  return (
    <button 
    onClick={() => props.handleClick(props.value)}
    style={{backgroundColor: props.color}} 
    className="button">{props.value}</button>
  );
}

export default Button;