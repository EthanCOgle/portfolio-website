import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Items from './components/Items';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Project and experience data
  const projects = [
    { name: 'Portfolio Website', description: 'A website to showcase my work.' },
    { name: 'E-commerce Store', description: 'An online store built with React and Firebase.' },
    { name: 'Task Manager', description: 'A productivity app for managing daily tasks.' },
  ];

  const experiences = [
    { company: 'Tech Corp', title: 'Frontend Developer', description: 'Developed and maintained front-end features.' },
    { company: 'Web Solutions', title: 'UI Designer', description: 'Designed user interfaces for web applications.' },
  ];

  return (
    <div style={{
      backgroundColor: darkTheme ? '#333' : '#fff',
      color: darkTheme ? '#fff' : '#000',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <Header title="John Doe's Portfolio" />
      <ThemeToggle toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <About />
      <Skills />
      <Items title="Projects" items={projects} type="project" />
      <Items title="Experience" items={experiences} type="experience" />
    </div>
  );
}

export default App;
