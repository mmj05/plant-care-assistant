import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../features/plant/plantSlice';

const PlantForm = () => {
  const [plantName, setPlantName] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantName,
      wateringFrequency: wateringFrequency,
    };
    dispatch(addPlant(newPlant));
    setPlantName('');
    setWateringFrequency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Plant Name:
        <input
          type="text"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
      </label>
      <label>
        Watering Frequency (in days):
        <input
          type="number"
          value={wateringFrequency}
          onChange={(e) => setWateringFrequency(e.target.value)}
        />
      </label>
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default PlantForm;