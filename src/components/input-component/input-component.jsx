import "./input.styles.scss";

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.name} className="label">
        {props.name}
      </label>

      <input
        type={props.type}
        className="input-element"
        required
        name={props.name}
        id={props.name}
      />
    </div>
  );
};

export default Input;
