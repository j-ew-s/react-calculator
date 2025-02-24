import {  useState } from 'react';
import './App.css'
import Display from './components/display';
import Pad from './components/pad';

function App() {

  const [ecra, setEcra] = useState("");
  const [firstInput, setFirstInput] = useState("");
  const [operation, setOperation] = useState("");
  const [secondInput, setSecondInput] = useState("");

  function addOperation(input: string) {
    setOperation(input);
    setEcra(`${firstInput} ${input}`);
  }

  function calculate() {
    let result = "";
    if (operation === "+") {
      result = (parseInt(firstInput) + parseInt(secondInput)).toString();
    } else if (operation === "-") {
      result = (parseInt(firstInput) - parseInt(secondInput)).toString();
    }

    setEcra(result);
    setFirstInput(result);
    setSecondInput("");
    setOperation("");
  }

  function setInput(input: number) {
    if (operation === "") {
      setFirstInput((prev) => prev + input);
      setEcra((prev) => prev + input);
    } else {
      setSecondInput((prev) => prev + input);
      setEcra((prev) => prev + input);
    }
  }

  function clearEcra() {
    setEcra("");
    setFirstInput("");
    setSecondInput("");
    setOperation("");
  }

  return (
  <>
    <div>
      <Display value={ecra}/>
      <Pad
        onCalculate={calculate}
        onClear={clearEcra}
        onNumberClick={setInput}
        onOperationClick={addOperation}
      />
    </div>
  </>  
  )
}

export default App
