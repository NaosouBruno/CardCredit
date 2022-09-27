import { useState } from "react";
import { InputForm, InputError } from "../../atoms/index";
import "./form.scss";
const initialState = {
  name: "",
  number: "",
  mm: "",
  yy: "",
  cvc: "",
};

const initialClassState = {
  name: true,
  number: true,
  mm: true,
  yy: true,
  cvc: true,
};

const initialInputsState = {
  name: false,
  number: false,
  mm: false,
  yy: false,
  cvc: false,
};
function CardForm() {
  const [card, setCard] = useState(initialState);

  const [classValid, setClassValid] = useState(initialClassState);

  const [inputIsValid, setInputIsValid] = useState(initialInputsState);

  const submitForm = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      alert("Deu certo!");
      setCard(initialState);
      setClassValid(initialClassState);
      setInputIsValid(initialInputsState);
    } else {
      classIsValid();
    }
  };

  const handlerChange = (event) => {
    const value = event.target.value;
    setCard({
      ...card,
      [event.target.name]: value,
    });
    classChange(event);
    inputChange(event);
  };

  const classChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setClassValid({
        ...classValid,
        [event.target.name]: true,
      });
    } else {
      setClassValid({
        ...classValid,
        [event.target.name]: false,
      });
    }
  };

  const formIsValid = () => {
    if (
      inputIsValid.name &&
      inputIsValid.number &&
      inputIsValid.mm &&
      inputIsValid.yy &&
      inputIsValid.cvc
    ) {
      return true;
    } else {
      return false;
    }
  };

  const inputChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputIsValid({
        ...inputIsValid,
        [event.target.name]: true,
      });
    } else {
      setInputIsValid({
        ...inputIsValid,
        [event.target.name]: false,
      });
    }
  };

  const classIsValid = () => {
    for (const val in inputIsValid) {
      console.log(inputIsValid[val]);
      if (!inputIsValid[val]) {
        console.log(val);
        setClassValid((classValid) => {
          return {
            ...classValid,
            [val]: false,
          };
        });
      }
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
          class={classValid.name ? "form__input " : "form__input error"}
          placeholder="e.g. Jnae Appleseed"
          name="name"
          value={card.name}
          onTextChange={handlerChange}
        />

        {/*  <span className={classValid.name ? " " : "error__description"}>
          {classValid.name ? "" : "Can`t be blank"}
        </span> */}
        <InputError
          class={classValid.name ? " " : "error__description"}
          content={classValid.name ? "" : "Can`t be blank"}
        />
      </div>

      <div className="form__container">
        <label htmlFor="cardNumber" className="form__description">
          Card Number
        </label>
        <InputForm
          type="number"
          id="cardNumber"
          class={classValid.number ? "form__input " : "form__input error"}
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          value={card.number}
          onTextChange={handlerChange}
        />

        <InputError
          class={classValid.number ? " " : "error__description"}
          content={classValid.number ? "" : "Can`t be blank"}
        />
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
              class={
                classValid.mm
                  ? "form__input form__input--date"
                  : "form__input form__input--date error"
              }
              placeholder="MM"
              name="mm"
              value={card.mm}
              onTextChange={handlerChange}
            />

            <InputForm
              type="number"
              id="cardDate"
              class={
                classValid.yy
                  ? "form__input form__input--date"
                  : "form__input form__input--date error"
              }
              placeholder="YY"
              name="yy"
              value={card.yy}
              onTextChange={handlerChange}
            />
          </div>
          <InputError
            class={classValid.mm ? " " : "error__description"}
            content={classValid.mm ? "" : "Can`t be blank"}
          />
        </div>
        <div className="form__dateGroup">
          <label htmlFor="cardCvc" className="form__description">
            CVC
          </label>
          <InputForm
            type="number"
            id="cardCvc"
            class={
              classValid.cvc
                ? "form__input form__input--cvc"
                : "form__input form__input--cvc error"
            }
            placeholder="e.g 123"
            name="cvc"
            value={card.cvc}
            onTextChange={handlerChange}
          />
          <InputError
            class={classValid.cvc ? " " : "error__description"}
            content={classValid.cvc ? "" : "Can`t be blank"}
          />
        </div>
      </div>

      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
