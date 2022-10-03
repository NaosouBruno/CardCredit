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
      pattern={props.pattern}
      minLength={props.min}
      maxLength={props.max}
    />
  );
}

export default InputForm;
