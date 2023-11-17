import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'; 
import { Bio } from './components/Bio/Bio'; 
import { Education } from './components/Education/Education';

function App() {
  return (
    <>
    <NavBar />
    <Bio />
    <Education />
    </>
  );
}

export default App;
