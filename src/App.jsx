import React from 'react';
import './App.css';
import Header from "./components/Header";
//import Circular from './components/general/Circular';
import Hero from "./components/Hero";
import Trending from "./components/Trending";

function App() {
  return (
    <main className='flex22 fC'>
      <Header/>
      <Hero/>
      <Trending/>
    </main>
  );
}

export default App;
