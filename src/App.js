import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the street in Brooklyn"
          imageSrc="/images/fashion.jpg"  
          imageAlt="street in brooklyn"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris at felis."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imageSrc="/images/blog.jpg" 
          imageAlt="vintage fashion"
          content="In 2024, fashion is moving toward minimalist designs and bright colors."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;