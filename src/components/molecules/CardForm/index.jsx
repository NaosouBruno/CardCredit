import { useState } from "react";
import "./form.scss";
const initialState = {
  name: "",
  /* number: "",
  mm: "",
  yy: "",
  cvc: "", */
};

function CardForm() {
  const [card, setCard] = useState(initialState);
  const [nameHasError, setNameHasError] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (validForm()) {
      alert("Deu certo");
      setCard({ ...initialState });
    }
    console.log(card);
  };

  const handlerChange = (event) => {
    const value = event.target.value;
    setCard({
      ...card,
      [event.target.name]: value,
    });
  };

  const validForm = () => {
    if (card.name.trim().length > 0) {
      setNameHasError(false);
      return true;
    } else {
      setNameHasError(true);
      return false;
    }
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
          /* className="form__input" */
          className={nameHasError ? "form__input error" : "form__input "}
          placeholder="e.g. Jnae Appleseed"
          name="name"
          value={card.name}
          onChange={handlerChange}
        />
      </div>

      <div className="form__container">
        <label htmlFor="cardNumber" className="form__description">
          Card Number
        </label>
        <input
          type="number"
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
          <div>
            <input
              type="number"
              id="cardDate"
              className="form__input form__input--date"
              placeholder="MM"
            />
            <input
              type="number"
              id="cardDate"
              className=" form__input form__input--date"
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
            className="form__input form__input--cvc"
            placeholder="e.g 123"
          />
        </div>
      </div>

      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
