import React from "react";

const BookCard = ({ book }) => {
  const { name, author, imageUrl } = book;
  return (
    <div className='book-card'>
      <img src={imageUrl} alt={name} className='image-card' />
      <div className='book-detail'>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      <div className='book-action'>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default BookCard;
