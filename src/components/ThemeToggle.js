import React from 'react';

function ThemeToggle({ toggleTheme, darkTheme }) {
  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: '10px 20px',
        backgroundColor: darkTheme ? '#555' : '#ddd',
        color: darkTheme ? '#ddd' : '#555',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>
      Switch to {darkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
}

export default ThemeToggle;
