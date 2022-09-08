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
          placeholder="e.g. Jnae Appleseed"
        />
      </div>
      <div className="form__container">
        <label htmlFor="cardNumber" className="form__description">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="form__input"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </div>
      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
