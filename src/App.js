import { useState } from 'react';
import './App.css';
import FruitsList from './FruitsList/FruitsList';
import Summary from './Summary/Summary';
import Demo from './Demo';
import Name from './Name/Name';

function App() {

  const [counter, setCounter] = useState(0)
  const [submittedName, setSubmittedName] = useState('')

  // return(
  //   <Demo />
  // )

  return (
    <>
      <Name setSubmittedName={setSubmittedName}/> 
      <h2>{submittedName ? `Fruits ${submittedName} loves:` : 'Fruits you love:'}</h2>
      <FruitsList counterCallback={setCounter}/>
      <Summary counter={counter} submittedName={submittedName}/>
    </>
  );
}

export default App;
