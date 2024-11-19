import React from 'react';

function Header() {
  return (
    <header>
      <h1>Fashion Blog</h1>
      <h2>The Latest Trends</h2>
      <nav>
        <ul aria-label="Main Navigation" role="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">Latest Posts</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
