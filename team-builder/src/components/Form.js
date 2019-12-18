import React, { useState } from 'react';
import '../App.css';

const Form = props => {
  const [person, setPerson] = useState({
    name: '',
    description: ''
  });

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewPerson(person);
    setPerson({ name: '', description: '' });
  };

  return (
    <form className='container' onSubmit={submitForm}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        placeholder='Name'
        onChange={handleChange}
        name='name'
        value={person.name}
      />
      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        onChange={handleChange}
        name='description'
        value={person.description}
      />

      <button className='special' type='submit'>
        Add Team Member
      </button>
    </form>
  );
};

export default Form;
