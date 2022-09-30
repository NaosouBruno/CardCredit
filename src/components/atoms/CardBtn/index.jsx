function CardBtn(props) {
  return (
    <button onClick={props.click} className={props.class}>
      {props.content}
    </button>
  );
}

export default CardBtn;
