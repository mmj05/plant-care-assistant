// PlantList.js
import React from 'react';
import { useSelector } from 'react-redux';
import './PlantList.css';

const PlantList = () => {
  const plants = useSelector((state) => state.plants.plants);

  return (
    <div className="plant-list-container">
      <h2>Your Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.name} className="plant-item">
            {plant.name} - Water every {plant.wateringFrequency} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;