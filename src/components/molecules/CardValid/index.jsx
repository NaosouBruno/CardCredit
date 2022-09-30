import { useState } from "react";
import "./cardValid.scss";
import { CardBtn } from "../../atoms/index";
import Valid from "../../../assets/icon-complete.svg";

function CardValid({ onBtnClicked }) {
  const [clicked, setClicked] = useState(false);

  const hasClicked = () => {
    setClicked(true);
    onBtnClicked(clicked);
  };
  return (
    <footer className="valid">
      <div>
        <img src={Valid} alt="Simbolo de concluido" />
      </div>
      <div className="valid__container">
        <span className="valid__message">Thank You!</span>
      </div>
      <div className="valid__container valid__container--bot">
        <span className="valid__textDetails">We`ve added you card details</span>
      </div>

      <CardBtn content="Continue" class="form__btnSubmit" click={hasClicked} />
    </footer>
  );
}

export default CardValid;
