import "./form.scss";
function CardForm() {
  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitForm} className="form">
      <div className="form__container">
        <label htmlFor="cardName" className="form__description">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardName"
          className="form__input"
          placeholder="e.g Jnae Appleseed"
        />
      </div>
      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
