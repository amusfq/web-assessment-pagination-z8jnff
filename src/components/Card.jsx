import React from 'react';

export const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <h2 className="title">Card {data.id}</h2>
        <img src={data.image.url} />
      </div>
      <p className="description">{data.description}</p>
    </div>
  );
};

export default Card;
