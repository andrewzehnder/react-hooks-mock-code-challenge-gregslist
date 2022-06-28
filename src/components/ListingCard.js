import React, { useState} from "react";

function ListingCard({ card, onDeletedItem }) {
const { id, description, image, location } = card
const [favorite, setFavorite] = useState("true")

function toggleButton() {
  setFavorite(!favorite)
}

function handleDelete() {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
  .then((r) => r.json())
  .then(() => onDeletedItem(card)) 

}

  return (
    <li className="card" key={ id }>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={toggleButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
