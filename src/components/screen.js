import './screen.css'

const Screen = (props) => {
  return (
    <div className="screen">
      <div className="result">{props.result}</div>
      <div className="exp">{props.exp}</div>
    </div>
  );
}

export default Screen;