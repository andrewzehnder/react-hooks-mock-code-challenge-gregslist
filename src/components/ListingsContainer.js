import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, onDeletedItem }) {

  return (
    <main>
      <ul className="cards">
        {cards.map((card) => (
          <ListingCard
          key={ card.id }
          card= { card }
          onDeletedItem={ onDeletedItem }
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
