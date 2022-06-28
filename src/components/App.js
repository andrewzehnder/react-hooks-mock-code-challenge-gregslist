import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then ((cards) => setCards(cards))
  }, [])

  function handleDeletedItem(deletedCard) {
    const updatedCards = cards.filter((card) => card.id !== deletedCard.id);
    setCards(updatedCards)
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  let itemsToDisplay = cards.filter((card) => {
    if(search === "") {
      return true;
    }
    else {
      const description = card.description.toUpperCase();
      return description.includes(search.toUpperCase())
    }
  })

  return (
    <div className="app">
      <Header onSearchChange={ handleSearch } search={ search }/>
      <ListingsContainer cards={ itemsToDisplay } onDeletedItem={ handleDeletedItem } />
    </div>
  );
}

export default App;
