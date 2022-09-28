import "./cardInfo.scss";
function CardInfo({ list }) {
  return (
    <div className="cardInfo">
      {list.map((card, index) => (
        <div key={index}>
          <div className="cardInfo__back">
            <span className="cardInfo__cardCvc">123</span>
          </div>
          <div className="cardInfo__front">
            <div className="cardInfo__bigBall">
              <span className="cardInfo__cardNumber">0000 0000 0000 0000</span>
              <div className="cardInfo__cardGroup">
                <span className="cardInfo__cardName">JANE APPLESEED</span>
                <span className="cardInfo__cardValidty">00/00</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardInfo;
