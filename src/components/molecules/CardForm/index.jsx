import { useState } from "react";
import { InputForm } from "../../atoms/index";
import "./form.scss";
const initialState = {
  name: "",
  number: "",
};
const initialValid = {
  name: true,
  number: true,
};

function CardForm() {
  const [card, setCard] = useState(initialState);
  const [valid, setValid] = useState(initialValid);
  /* const [allValid, setAllValid] = useState(false); */

  const submitForm = (event) => {
    event.preventDefault();
    if (validForm()) {
      alert("Deu certo");
      setCard({ ...initialState });
      setValid({ ...initialValid });
    }
    /* console.log(card); */
  };

  const handlerChange = (event) => {
    const value = event.target.value;
    setCard({
      ...card,
      [event.target.name]: value,
    });
    isEmpety(event);
  };

  const isEmpety = (event) => {
    console.log(valid);

    if (event.target.value.trim().length > 0) {
      setValid({
        ...valid,
        [event.target.name]: true,
      });
    } else {
      setValid({
        ...valid,
        [event.target.name]: false,
      });
    }
  };

  const validForm = () => {
    console.log(valid.name);
  };

  return (
    <form onSubmit={submitForm} className="form">
      <div className="form__container">
        <label htmlFor="cardName" className="form__description">
          Cardholder Name
        </label>
        <InputForm
          type="text"
          id="cardName"
          class={valid.name ? "form__input " : "form__input error"}
          placeholder="e.g. Jnae Appleseed"
          name="name"
          value={card.name}
          onTextChange={handlerChange}
        />
        {/* <input
          type="text"
          id="cardName"
          className={valid.name ? "form__input " : "form__input error"}
          placeholder="e.g. Jnae Appleseed"
          name="name"
          value={card.name}
          onChange={handlerChange}
        /> */}
        <span className={valid.name ? " " : "error__description"}>
          {valid.name ? "" : "Can`t be blank"}
        </span>
      </div>

      <div className="form__container">
        <label htmlFor="cardNumber" className="form__description">
          Card Number
        </label>
        <input
          type="number"
          id="cardNumber"
          className={valid.number ? "form__input " : "form__input error"}
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          value={card.number}
          onChange={handlerChange}
        />

        <span className={valid.number ? " " : "error__description"}>
          {valid.number ? "" : "Can`t be blank"}
        </span>
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
