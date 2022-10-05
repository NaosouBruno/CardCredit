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

const initialErrorMessage = {
  name: "Can`t be blank",
  number: "Can`t be blank",
  date: "Can`t be blank",
  cvc: "Can`t be blank",
};
function CardForm({ onAddCard }) {
  const [card, setCard] = useState(initialState);

  const [classValid, setClassValid] = useState(initialClassState);

  const [inputIsValid, setInputIsValid] = useState(initialInputsState);

  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const submitForm = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      onAddCard(card);
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
  };

  const fieldValid = (event) => {
    switch (event.target.name) {
      case "name":
        checkName(event);
        break;
      case "number":
        checkFieldEmpty(event);
        break;
      case "mm":
        checkFieldEmpty(event);
        break;
      case "yy":
        checkFieldEmpty(event);
        break;
      case "cvc":
        checkFieldEmpty(event);
        break;
      default:
        console.log("a");
    }
  };

  const checkName = (field) => {
    const checkName = field.target.value;
    const hasNumber = /[0-9]/;
    const hasSpecial = /^(?=.*[@!.+=#$%^&*()/\\])/;

    const resultNumber = hasNumber.test(checkName);

    const resultSpecial = hasSpecial.test(checkName);

    if (resultSpecial || resultNumber || checkName < 3 || checkName > 12) {
      markHasFalse(field);
      changeNameMessageError(checkName, field.target.name);
    } else {
      markHasTrue(field);
    }
  };

  const changeNameMessageError = (value, field) => {
    if (value.trim().length === 0) {
      setErrorMessage({
        ...errorMessage,
        [field]: "Can`t be blank",
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [field]: "Wrong format",
      });
    }
  };

  const changeNumbersMessageError = (value, max, field) => {
    if (value.trim().length === 0) {
      console.log(value.trim().length);
      setErrorMessage({
        ...errorMessage,
        [field]: "Can`t be blank",
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [field]: "Wrong format",
      });
    }
  };
  const checkFieldEmpty = (event) => {
    const targetName = event.target.name;
    /*  const value = event.target.value; */
    let min = 0;
    let max = 0;

    switch (targetName) {
      case "number":
        min = 16;
        max = 16;
        fieldIsEmpty(event, min, max);
        /*  changeNumbersMessageError(value, max, targetName); */
        break;
      case "mm":
        min = 2;
        max = 2;
        fieldIsEmpty(event, min, max);

        break;
      case "yy":
        min = 2;
        max = 2;
        fieldIsEmpty(event, min, max);

        break;
      case "cvc":
        min = 3;
        max = 3;
        fieldIsEmpty(event, min, max);

        break;
      default:
        break;
    }
  };

  const fieldIsEmpty = (event, min, max) => {
    const value = event.target.value;
    const targetName = event.target.name;

    console.log("field is empty ta sendo executado");

    if (value.trim().length < min || value.trim().length > max) {
      markHasFalse(event);
      console.log(targetName);
      changeNumbersMessageError(value, targetName);
    } else {
      markHasTrue(event);
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

  const markHasFalse = (event) => {
    console.log("entrou no has false");
    setInputIsValid({
      ...inputIsValid,
      [event.target.name]: false,
    });

    setClassValid({
      ...classValid,
      [event.target.name]: false,
    });
  };

  const markHasTrue = (event) => {
    setInputIsValid({
      ...inputIsValid,
      [event.target.name]: true,
    });
    setClassValid({
      ...classValid,
      [event.target.name]: true,
    });
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
          content={classValid.name ? "" : errorMessage.name}
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
          class={classValid.number ? "" : "error__description"}
          content={classValid.number ? "" : errorMessage.number}
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
            content={classValid.mm ? "" : errorMessage.date}
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
            content={classValid.cvc ? "" : errorMessage.cvc}
          />
        </div>
      </div>

      <button className="form__btnSubmit">Confirm</button>
    </form>
  );
}

export default CardForm;
