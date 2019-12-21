import React from 'react';
import '../App.css';

const Card = props => {
  return (
    <div className='container'>
      {props.person.map(p => (
        <div className='card' key='p.id'>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
