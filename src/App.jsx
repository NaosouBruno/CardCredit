import React from "react";
import { CardForm, CardInfo, CardValid } from "./components/molecules/index";
import { useState } from "react";
function App() {
  const [card, setCard] = useState([]);
  const [formValid, setFormValid] = useState(false);

  const handleSavaCard = (cardUser) => {
    let newCard = [...card];
    newCard.push(cardUser);

    setCard(newCard);

    setFormValid(true);
  };

  const handleBtn = (btnClicked) => {
    setFormValid(btnClicked);
  };
  return (
    <div className="App">
      <CardInfo list={card} />

      {formValid ? (
        <CardValid onBtnClicked={handleBtn} />
      ) : (
        <CardForm onAddCard={handleSavaCard} />
      )}
    </div>
  );
}

export default App;
