import { useState } from 'react';
import './App.css';
import FruitsList from './FruitsList/FruitsList';
import Summary from './Summary/Summary';
import Demo from './Demo';

function App() {

  const [counter, setCounter] = useState(0)

  // return(
  //   <Demo />
  // )

  return (
    <>
      <h2>Fruits I love:</h2>
      <FruitsList counterCallback={setCounter}/>
      <Summary counter={counter}/>
    </>
  );
}

export default App;
