import React from 'react';
import './Home.css';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home(){
  return (
    <div className="home-container">
      <Hero />  
      <Cards />
      <Footer />    
    </div>
  );
}

export default Home;
