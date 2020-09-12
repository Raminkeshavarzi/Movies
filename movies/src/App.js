import React from 'react';
import Header from './Component/Header/Header';
import SubNav from './Component/Header/SubNav';
import Results from './Component/Results/Results';
import './Component/App/App.css';



function App() {
  return (
    <div className="app">
      <Header />
      <SubNav />
      <Results />
    </div>
  );
}

export default App;
