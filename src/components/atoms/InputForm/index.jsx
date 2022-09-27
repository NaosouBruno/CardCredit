function InputForm(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      className={props.class}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onTextChange}
      min={props.min}
      max={props.max}
    />
  );
}

export default InputForm;
