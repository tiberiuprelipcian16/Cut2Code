import React from 'react';
import './App.css';
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Creator from "./components/Creator";
import Footer from "./components/Footer";
import Circular from './components/general/Circular';

function App() {
  return (
    <main className='flex12 fC'>
    
      
      <Hero/>
      <Circular className={"heroCircular min"}/>
      <Trending/>
      <Circular className={"trendingCircular1 max"}/>
      <Circular className={"trendingCircular2 max"}/>
      <Creator/>
      <Circular className={"creatorCircular max"}/>
      <Footer/>
      <Circular className={"footerCircular max"}/>
    </main>
  );
}

export default App;
