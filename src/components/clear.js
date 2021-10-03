import './clear.css';

const Clear = (props) => {
  return (
    <button 
    onClick={props.handleClear}
    className="clear">
      Clear
    </button>
  );
}

export default Clear;