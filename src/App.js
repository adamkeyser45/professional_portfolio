import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import './App.css';

function App() {

  const [tabs] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  return (
    <div>
      <main>
        <Header></Header>
        <Navigation tabs={tabs}></Navigation>
      </main>
      <Footer />
    </div>
  );
}

export default App;
