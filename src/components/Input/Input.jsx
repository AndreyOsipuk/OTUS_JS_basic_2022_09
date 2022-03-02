import React from 'react';

export const Input = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  )
}