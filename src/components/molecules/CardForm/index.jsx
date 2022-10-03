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
function CardForm({ onAddCard }) {
  const [card, setCard] = useState(initialState);

  const [classValid, setClassValid] = useState(initialClassState);

  const [inputIsValid, setInputIsValid] = useState(initialInputsState);

  const submitForm = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      onAddCard(card);
      /*  setCard(initialState);
      setClassValid(initialClassState);
      setInputIsValid(initialInputsState); */
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

    fieldValid(event);
    classChange(event);
    inputChange(event);
  };

  const fieldValid = (event) => {
    switch (event.target.name) {
      case "name":
        checkName(event);
        /*  checkField(event); */
        break;
      case "number":
        checkField(event);
        break;
      case "mm":
        checkField(event);
        break;
      case "yy":
        checkField(event);
        break;
      case "cvc":
        checkField(event);
        break;
      default:
        console.log("a");
    }
  };

  const checkName = (field) => {
    if (field.target.value.trim().length < 3) {
      console.log("entrou if");
    } else {
      console.log("entrou else");
    }
  };
  const checkField = (event) => {};

  const classChange = (event) => {
    if (event.target.value.trim().length > 0) {
      /*  fieldValid(event); */
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
      if (!inputIsValid[val]) {
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
          placeholder="e.g. Jane Appleseed"
          name="name"
          value={card.name}
          onTextChange={handlerChange}
          pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
          min="3"
          max="16"
        />

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
          pattern="[0-9]+$"
          min="16"
          max="16"
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
              pattern="[0-9]+$"
              min="2"
              max="2"
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
              pattern="[0-9]+$"
              min="2"
              max="2"
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
            pattern="[0-9]+$"
            min="3"
            max="3"
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
