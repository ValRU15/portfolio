import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'; 
import { Bio } from './components/Bio/Bio'; 

function App() {
  return (
    <>
    <NavBar />
    <Bio />
    </>
  );
}

export default App;
