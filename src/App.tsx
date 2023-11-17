import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'; 
import { Bio } from './components/Bio/Bio'; 
import { Education } from './components/Education/Education';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
    <AnimatedCursor
      innerSize={15}
      outerSize={25}
      color='245, 95, 115'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <NavBar />
    <Bio />
    <Education />
    </>
  );
}

export default App;
