import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Anonime</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">List anime</a>
      </nav>
      <input type="text" placeholder="Search anime or movie" />
    </header>
  );
};

export default Header;