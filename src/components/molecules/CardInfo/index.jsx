import "./cardInfo.scss";
function CardInfo({ list, reset }) {
  return (
    <div className="cardInfo">
      {reset ? (
        list.map((card, index) => (
          <div key={index}>
            <div className="cardInfo__back">
              <span className="cardInfo__cardCvc">{card.cvc}</span>
            </div>
            <div className="cardInfo__front">
              <div className="cardInfo__bigBall">
                <span className="cardInfo__cardNumber">{card.number}</span>
                <div className="cardInfo__cardGroup">
                  <span className="cardInfo__cardName">{card.name}</span>
                  <span className="cardInfo__cardValidty">
                    {card.mm}/{card.yy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="cardInfo__back">
            <span className="cardInfo__cardCvc">000</span>
          </div>
          <div className="cardInfo__front">
            <div className="cardInfo__bigBall">
              <span className="cardInfo__cardNumber">0000 0000 0000 0000</span>
              <div className="cardInfo__cardGroup">
                <span className="cardInfo__cardName">Jane Appleseed</span>
                <span className="cardInfo__cardValidty">00/00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardInfo;
