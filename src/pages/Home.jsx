import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>
        <Typewriter
          words={['Gabriel Souza!', 'Desenvolvedor Back-end']}
          loop={0} // infinito
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
        <div className="pulse-line"></div>

    </div>
  );
}
