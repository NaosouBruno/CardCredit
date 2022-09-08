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

      <div className="form__containerDate">
        <div className="form__dateGroup">
          <label htmlFor="cardDate" className="form__description">
            Exp. Date (MM/YY)
          </label>
          <div className="form__dateGroup form__dateGroup--dateInput">
            <input
              type="number"
              id="cardDate"
              className="form__input form__input--date"
              placeholder="MM"
            />
            <input
              type="number"
              id="cardDate"
              className="form__input form__input--date"
              placeholder="YY"
            />
          </div>
        </div>

        <div className="form__dateGroup">
          <label htmlFor="cardCvc" className="form__description">
            CVC
          </label>
          <input
            type="number"
            id="cardCvc"
            className="form__input form__input--date"
            placeholder="e.g 123"
          />
        </div>
      </div>
      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
