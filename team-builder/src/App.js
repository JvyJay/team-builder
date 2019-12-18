import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [person, setPerson] = useState([
    {
      id: 1,
      name: 'Jadon Guzman',
      description: "It's ya boi"
    }
  ]);

  const addNewPerson = p => {
    const newPerson = {
      id: Date.now(),
      name: p.name,
      description: p.description
    };
    setPerson([...person, newPerson]);
  };
  return (
    <div className='app'>
      <h1>Team Builder</h1>
      <Form addNewPerson={addNewPerson} />
      <Card person={person} />
    </div>
  );
};

export default App;
