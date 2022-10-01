import React from "react";
import { CardForm, CardInfo, CardValid } from "./components/molecules/index";
import { useState } from "react";
function App() {
  const [card, setCard] = useState([]);
  const [formValid, setFormValid] = useState(false);
  const [resetList, setResetList] = useState(false);

  const handleSavaCard = (cardUser, btnClicked) => {
    let newCard = [...card];
    newCard.push(cardUser);

    setCard(newCard);
    setResetList(!btnClicked);
    setFormValid(true);
  };

  const handleBtn = (btnClicked) => {
    console.log("btn cliecked", btnClicked);
    setFormValid(btnClicked);
    setResetList(btnClicked);
  };
  return (
    <div className="App">
      <CardInfo list={card} reset={resetList} />

      {formValid ? (
        <CardValid onBtnClicked={handleBtn} />
      ) : (
        <CardForm onAddCard={handleSavaCard} />
      )}
    </div>
  );
}

export default App;
