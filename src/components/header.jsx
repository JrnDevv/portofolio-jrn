import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <a href="/">Home</a>
          <a href="/projetos">Projetos</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
