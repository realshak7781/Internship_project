import React, { useState } from 'react';
import './Navbar.css';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <h1>Where in the world!</h1>
      <IconButton onClick={toggleDarkMode} color="inherit" className="dark-mode-toggle">
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </nav>
  );
};

export default Navbar;
