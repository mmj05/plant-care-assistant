import React from 'react';
import PlantForm from './components/PlantForm';
import PlantList from './components/PlantList';

const App = () => {
  return (
    <div>
      <h1>Plant Care Assistant</h1>
      <PlantForm />
      <PlantList />
    </div>
  );
};

export default App;