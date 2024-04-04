import React from 'react';
import DataComponent from './Redux/DataComp'; // Importing the DataComponent
import CardComp from './CardComp'; // Importing the CardComp component


// Main App component
const App = () => {
  return (
    <div>
      <div>
        {/* Wrapping CardComp inside DataComponent to provide product data */}
        <DataComponent>
          <CardComp />
        </DataComponent>
      </div>
   
    </div>
  );
};

export default App; // Exporting the App component