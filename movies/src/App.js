import React, { useState } from 'react';
import Header from './Component/Header/Header';
import SubNav from './Component/Header/SubNav';
import Results from './Component/Results/Results';
import './Component/App/App.css';
import requests from './Component/Requests/requests';



function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending); 

  return (
    <div className="app">
      <Header />
      <SubNav  setSelectedOption={setSelectedOption}/>
      <Results  selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
