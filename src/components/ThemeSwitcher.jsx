import React from 'react';
import { Switch } from '@mui/material';

const ThemeSwitcher = ({ toggleTheme, isDarkMode }) => {
  return (
    <Switch checked={isDarkMode} onChange={toggleTheme} />
  );
};

export default ThemeSwitcher;
