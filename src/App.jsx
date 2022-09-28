import React from "react";
import { CardForm, CardInfo } from "./components/molecules/index";
import { useState } from "react";
function App() {
  const [card, setCard] = useState([]);

  const handleSavaCard = (cardUser) => {
    let newCard = [...card];
    newCard.push(cardUser);
    console.log(newCard);
    setCard(newCard);
  };
  return (
    <div className="App">
      <CardInfo list={card} />
      <CardForm onAddCard={handleSavaCard} />
    </div>
  );
}

export default App;
