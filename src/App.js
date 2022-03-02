import React from 'react';

export const App = ({ click, disabled }) => {
  return (
    <button onClick={click} disabled={disabled} style={{ backgroundColor: 'red' }}>submit</button>
  )
}