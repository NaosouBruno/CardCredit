import { useState, useEffect } from "react";
import { InputForm } from "../../atoms/index";
import "./form.scss";
const initialState = {
  name: "",
  number: "",
  mm: "",
  yy: "",
  cvc: "",
};
const initialValid = {
  name: false,
  number: false,
};
/* const initialClass = {
  name: true,
  number: true,
}; */

function CardForm() {
  const [card, setCard] = useState(initialState);
  const [valid, setValid] = useState(initialValid);
  const [classValid, setClassValid] = useState({ name: true, number: true });

  const submitForm = (event) => {
    event.preventDefault();

    if (validForm()) {
      alert("Deu certo");
      setCard({ ...initialState });
      setValid({ ...initialValid });
    } else {
      isValid();
    }
  };
  const isValid = () => {
    for (const val in valid) {
      if (valid[val]) {
        setClassValid({
          ...classValid,
          [val]: true,
        });
      } else {
        /*  console.log(valid); */
        console.log(classValid);
        setClassValid({
          [val]: false,
        });
      }
    }
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
    if (event.target.value.trim().length > 0) {
      setValid({
        ...valid,
        [event.target.name]: true,
      });
      setClassValid({
        ...classValid,
        [event.target.name]: true,
      });
    } else {
      setValid({
        ...valid,
        [event.target.name]: false,
      });
      setClassValid({
        ...classValid,
        [event.target.name]: false,
      });
    }
  };

  const validForm = () => {
    if (valid.name && valid.number) {
      console.log("valid");
      return true;
    } else {
      return false;
    }
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
          /* class="form__input" */
          class={classValid.name ? "form__input " : "form__input error"}
          placeholder="e.g. Jnae Appleseed"
          name="name"
          value={card.name}
          onTextChange={handlerChange}
        />

        {/*  <span className={valid.name ? " " : "error__description"}>
          {valid.name ? "" : "Can`t be blank"}
        </span> */}
      </div>

      <div className="form__container">
        <label htmlFor="cardNumber" className="form__description">
          Card Number
        </label>
        <InputForm
          type="number"
          id="cardNumber"
          /* class="form__input" */
          class={classValid.number ? "form__input " : "form__input error"}
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          value={card.number}
          onTextChange={handlerChange}
        />

        {/*  <span className={valid.number ? " " : "error__description"}>
          {valid.number ? "" : "Can`t be blank"}
        </span> */}
      </div>
      <div className="form__containerDate">
        <div className="form__dateGroup">
          <label htmlFor="cardDate" className="form__description">
            Exp. Date (MM/YY)
          </label>
          <div>
            <InputForm
              type="number"
              id="cardDate"
              class="form__input form__input--date"
              placeholder="MM"
              name="mm"
              value={card.mm}
              onTextChange={handlerChange}
            />

            <InputForm
              type="number"
              id="cardDate"
              class="form__input form__input--date"
              placeholder="YY"
              name="yy"
              value={card.yy}
              onTextChange={handlerChange}
            />
          </div>
        </div>
        <div className="form__dateGroup">
          <label htmlFor="cardCvc" className="form__description">
            CVC
          </label>
          <InputForm
            type="number"
            id="cardCvc"
            class="form__input form__input--cvc"
            placeholder="e.g 123"
            name="cvc"
            value={card.cvc}
            onTextChange={handlerChange}
          />
        </div>
      </div>

      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
