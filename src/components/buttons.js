import './buttons.css';

const Button = (props) => {
  return (
    <button 
    onClick={null}
    style={{backgroundColor: props.color}} 
    className="button">{props.value}</button>
  );
}

export default Button;