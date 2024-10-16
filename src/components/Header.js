import React from 'react';

function Header({ title }) {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{title}</h1>
      <p>Web Developer & Designer</p>
    </header>
  );
}

export default Header;
