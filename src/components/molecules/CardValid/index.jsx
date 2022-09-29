import "./cardValid.scss";
import { CardBtn } from "../../atoms/index";
import Valid from "../../../assets/icon-complete.svg";
function CardValid() {
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
      <CardBtn content="Continue" class="form__btnSubmit" />
    </footer>
  );
}

export default CardValid;
