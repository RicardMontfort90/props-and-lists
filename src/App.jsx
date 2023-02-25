import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData);

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      {animals.map (elem => {
        return <Card key={elem._id} animals={elem}/>
      })}
    </div>
  );
}

export default App;
