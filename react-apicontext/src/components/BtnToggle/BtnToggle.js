import React, { useContext } from 'react';
import './BtnToggle.css'
import { ThemeContext } from '../../Context/ThemeContext';


export default function BtnToggle() {

  const { toggleTheme,theme } = useContext(ThemeContext)

  return (
    <button className={theme ? "btn-toggle" :"btn-toggle dark-btn"}
      onClick={toggleTheme} >
      {theme ? "LIGHT" : "DARK"}
    </button>

  );
}
